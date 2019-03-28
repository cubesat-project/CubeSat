// Node modules
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
const fs = require('fs');
const path = require('path');

// Imports
const logger = require('../logger');
const constants = require('../constants');

router.route('/:id')
	// Rewrites the current queue in waiting with the received (updated) queue as a JSON object.
	.post(parseUrlencoded, parseJSON, (req, res) => {
		try 
		{
			var passDir = `Pass ${req.params.id}`;
		
			var passQueueDir = path.join(constants.CURR_QUEUE_DIR, passDir);
			if (!fs.existsSync(passQueueDir)) {
				fs.mkdirSync(passQueueDir);
			}
			var srcPath = path.join(passQueueDir, constants.QUEUE_FILE);
			// Write to local queue and parse back.
			fs.writeFileSync(srcPath, JSON.stringify(req.body));
			// Copy last saved queue for current date to external storage.
			/// TODO: Figure out how often we care about snapshotting the queue
			passBackupDir = path.join(constants.QUEUE_BACKUP_DIR, passDir);
			if (!fs.existsSync(passBackupDir)) {
				fs.mkdirSync(passBackupDir);
			}
			var destPath = path.join(passBackupDir, constants.QUEUE_FILE);
			fs.copyFile(srcPath, destPath, (err) => {
				if (err) throw err;
				logger.log('debug', `Queue copy from ${srcPath} to ${destPath} successful`);
			});
			// Parse back for verification
			success = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
			res.send(success);
			logger.info('POST /queue SUCCESS');
		} catch (e) {
			res.status(500).send({error: e});
			logger.error('POST /queue ERROR: %s', e);
		}
	})
	// Returns current queue JSON object from current queue file.
    .get(parseUrlencoded, parseJSON, (req, res) => {
    	try 
    	{
			var passDir = `Pass ${req.params.id}`;
			var passQueueFile = path.join(constant.CURR_QUEUE_DIR, passDir, constants.QUEUE_FILE);
	    	success = JSON.parse(fs.readFileSync(passQueueFile, 'utf8'));
	    	res.send(success);
	    	logger.info('GET /queue SUCCESS');
    	} catch (e) {
			res.status(500).send({error: e});
			logger.error('GET /queue ERROR: %s', e);
    	}
    });

module.exports = router;