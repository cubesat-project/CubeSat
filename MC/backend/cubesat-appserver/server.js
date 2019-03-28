// application server outlining the routes utilized by the
// frontend web application as well as the ground station server

const express = require('express');
const app = express();

var telecommands = require('./routes/telecommands');
var presetTelecommands = require('./routes/presetTelecommands');
var telecommandBatches = require('./routes/telecommandBatches');
var passes = require('./routes/passes');
var queuedTelecommands = require('./routes/queuedTelecommands');
var template = require('./routes/template');
var db_template = require('./routes/db-template');
var cubesat_dump = require('./routes/cubesat_dump');
var components = require('./routes/components');
var componentTelemetry = require('./routes/component-telemetry');
var telemetryData = require('./routes/telemetry-data');
var telemLimits = require('./routes/telem-limits');
var systems = require('./routes/systems');
var telemetryTypes = require('./routes/telemetry-types');
var transmissionQueue = require('./routes/transmission-queue');
var subscriptions = require('./routes/subscriptions');
var executionQueue = require('./routes/execution-queue');
var anomalies = require('./routes/anomalies');
var media = require('./routes/media');
const logger = require('./logger');

const port = 3000;

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(logger);

app.use('/preset-telecommands', presetTelecommands);
app.use('/telecommands', telecommands);
app.use('/telecommand-batches', telecommandBatches);
app.use('/passes', passes);
app.use('/queued-telecommands', queuedTelecommands);
app.use('/template', template);
app.use('/db-template', db_template);
app.use('/cubesat_dump', cubesat_dump);
app.use('/components', components);
app.use('/component-telemetry', componentTelemetry);
app.use('/telemetry-data', telemetryData);
app.use('/telem-limits', telemLimits);
app.use('/systems', systems);
app.use('/telemetry-types', telemetryTypes);
app.use('/transmission-queue', transmissionQueue);
app.use('/subscriptions', subscriptions);
app.use('/execution-queue', executionQueue);
app.use('/anomalies', anomalies);
app.use('/media', media);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;