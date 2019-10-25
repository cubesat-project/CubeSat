/*************
 * Logger for all relevant server operations.
 *************/

const { createLogger, format, transports } = require('winston');

const errorLog = 'error.log';
const combinedLog = 'combined.log';

const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.errors({stack:true}),
		format.splat(),
		format.json()
		),
	transports: [
		new transports.File({ filename: errorLog, level: 'error'}),
		new transports.File({ filename: combinedLog })
	]
});

logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));

module.exports = logger;
