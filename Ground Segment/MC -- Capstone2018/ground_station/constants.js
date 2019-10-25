/*
* Defining constants.
*/
function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

/*
* Server constants.
*/
define("PORT", 3700);
if (process.env.NODE_ENV == 'production') {
    define("APP_SERVER_HOST", '10.0.0.81');
    define("APP_SERVER_PORT", '3000');
    define("APP_SERVER_DUMP_ROUTE", '/cubesat_dump');
}

/*
* Data dump constants.
*/
define("DATA_DUMP_BACKUP_DIR", '/media/pi/Lexar/CubeSat/data_dump');
define("DATA_DUMP_WATCH_DIR", "/home/pi/Desktop/watchtest");

/*
* Queue path constants.
*/
if (process.env.NODE_ENV !== 'production') {
    define("CURR_QUEUE_DIR", `${__dirname}/test/queue/`);
	define("QUEUE_BACKUP_DIR", `${__dirname}/test/queue/queuedumptest`);
}
else {
    define("CURR_QUEUE_DIR", "/home/pi/Desktop/queue/");
    define("QUEUE_BACKUP_DIR", "/media/pi/Lexar/CubeSat/queue/");
}

/**
 * Queue filename.
 */
define("QUEUE_FILE", "queue.json");
