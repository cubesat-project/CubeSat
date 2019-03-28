/*************
 * Watches for CubeSat dump, and sends outgoing POST to application server with dump contents.
 * Also copies file to an external location as a backup.
 *************/

// Node modules
 const path = require('path');
const fs = require('fs');
const Inotify = require('inotify').Inotify; // TODO: Add to package.json
const inotify = new Inotify();
const http = require('http');

// Imports
const logger = require('../logger');
const constants = require('../constants');

var callback = function(event) {
	// Get event mask to determine which event happened.
    var mask = event.mask;
    var type = '';
    if (event.name) {
        type += event.name;
    } else {
        type += 'n/a';
	}
	
	var srcFilePath = path.join(constants.DATA_DUMP_WATCH_DIR, type);

    if (mask & Inotify.IN_ISDIR) {
		// Watch directory has been accessed; log and return.
		logger.log('info', 'Watch directory accessed.');
        return;
    }
    if (mask & Inotify.IN_CLOSE_WRITE) {
		// File is done writing; save backup.
        logger.log('debug', `Received created event ${type}`);
        var date = new Date();
		var dateString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        subDirPath = path.join(constants.DATA_DUMP_BACKUP_DIR, dateString);
        if (!fs.existsSync(subDirPath)) {
            fs.mkdirSync(subDirPath);
        }
		destPath = path.join(subDirPath, path.basename(type));
        fs.copyFile(srcFilePath, destPath, (err) => {
            if (err) throw err;
            logger.log('debug', `Copy from ${srcFilePath} to ${destPath} successful`);
        });

		// Send outgoing POST with dump data to app server.
		var options = {
			host: constants.APP_SERVER_HOST,
			port: constants.APP_SERVER_PORT,
			path: constants.APP_SERVER_DUMP_ROUTE,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer token",
				"Access-Control-Allow-Origin": "*"
			}
		};
		var jsonDump = fs.readFileSync(srcFilePath, 'utf-8');
		var fwdReq = http.request(options, res => {
        	var respStr = "";
			res.on('error', err => {
				logger.log('error', err);
				console.log(err);
			});
			res.on('data', data => {
				respStr += data;
			});
			res.on('end', () => {
				console.log(respStr);
				logger.log('info', respStr);
				if (!res.complete) {
					logger.log('warn', `Request was not fully completed: returned ${res.statusCode}`);
					console.log(`Request was not fully completed: returned ${res.statusCode}`);
				}
			});
        });
		fwdReq.on('error', err => {
			logger.log('error', err);
			console.log(err);
		});
		// Send outgoing POST
		fwdReq.write(jsonDump);
        fwdReq.end();
    }
}

var watch_dir = {
    path: constants.DATA_DUMP_WATCH_DIR,
    callback: callback
};

var watch_descriptor = inotify.addWatch(watch_dir);
