const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');
var moment = require('moment');

router.route('/')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            if (req.query.startDate) {
                var getParams = [moment(req.query.startDate).utc(false), moment(req.query.endDate).utc(false)];
                console.log(getParams);
                db.query("SELECT * FROM telemetryData WHERE collectionDateTime BETWEEN ? AND ?", getParams, function (error, results, fields) {
                    if (error) throw error;
                    res.send(results);
                });
            } else {
                console.log('no');
                db.query("SELECT * FROM telemetryData", function (error, results, fields) {
                    if (error) throw error;
                    res.send(results);
                });
            }
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })
    .post(parseUrlencoded, parseJSON, (req, res) => {
        try {
            var insertParams = [req.body.componentTelemetryID, req.body.telemetryValue];
            db.query('INSERT INTO telemetryData (componentTelemetryID, collectionDateTime, telemetryValue) VALUES (?, NOW(), ?)', insertParams, (error, results, fields) => {
                if (error) throw error;
                console.log('Inserted telemetry data successfully');
                res.json(results);
            });
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    });

router.route('/:componentTelemetryID')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            if (req.query.startDate) {
                console.log(req.query);
                var getParams = [req.params.componentTelemetryID, new Date(parseInt(req.query.startDate)), new Date(parseInt(req.query.endDate))];
                console.log(getParams);
                db.query("SELECT * FROM telemetryData WHERE componentTelemetryID = ? AND collectionDateTime BETWEEN ? AND ?", getParams, function (error, results, fields) {
                    if (error) throw error;
                    res.send(results);
                });
            } else {
                console.log('no');
                db.query("SELECT * FROM telemetryData WHERE componentTelemetryID = ?", req.params.componentTelemetryID, function (error, results, fields) {
                    if (error) throw error;
                    res.send(results);
                });
            }
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

module.exports = router;