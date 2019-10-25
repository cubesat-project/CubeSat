const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
const db = require('../database');
const anomalyDetector = require('../helpers/detect-anomalies');

router.route('/')
    .post(parseUrlencoded, parseJSON, (req, res) => {

        anomalyDetector.dataDump(req.body);

        try {
            var now = new Date();
            
            // set next pass in line as "occurred" and update the actual pass date time of the pass
            db.query("SELECT estimatedPassDateTime FROM passes WHERE passHasOccurred = 0 ORDER BY estimatedPassDateTime ASC", function(error, results, fields) {
                let nextUnoccurredPass = results[0].estimatedPassDateTime;
                db.query("UPDATE passes SET passHasOccurred = ?, actualPassDateTime = ? WHERE estimatedPassDateTime = ?", [1, now, nextUnoccurredPass], function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                })
            })

            for (reading = 0; reading < req.body.length; reading++) {
                let insertParams = [req.body[reading].componentTelemetryID, req.body[reading].collectionDateTime, req.body[reading].telemetryValue];
                db.query("INSERT INTO telemetryData (componentTelemetryID, collectionDateTime, telemetryValue) VALUES (?, ?, ?)", insertParams, function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                })
            }
            res.sendStatus(200);

        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

module.exports = router;
