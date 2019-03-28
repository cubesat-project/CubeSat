const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');

router.route('/')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("SELECT collectionTime, compTelemName, compName, sysName, upperBound, lowerBound, reading, unit FROM " +
            "(SELECT td.telemetryDataID as 'telemDataId', td.collectionDateTime as 'collectionTime', ct.name as 'compTelemName', c.name as 'compName', s.systemName as 'sysName', " +
            "ct.upperBound as 'upperBound', ct.lowerBound as 'lowerBound', td.telemetryValue as 'reading', tt.telemetryUnit as 'unit' FROM " +
            "telemetryData td INNER JOIN componentTelemetry ct ON td.componentTelemetryID = ct.componentTelemetryID INNER JOIN " +
            "components c ON ct.componentID = c.componentID INNER JOIN systems s ON c.systemID = s.systemID INNER JOIN telemetryTypes tt " +
            "ON tt.telemetryTypeID = ct.telemetryTypeID) AS everything WHERE reading > upperBound OR reading < lowerBound " +
            "ORDER BY collectionTime DESC", [], function(error, results, fields) {
                if (error) throw error;
                res.send(results);
            })
        } catch (err) {
            res.send(err);
            console.log(err);
        }
    })

module.exports = router;
