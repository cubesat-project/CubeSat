const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');

router.route('/')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("SELECT * FROM telemetryTypes", function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })

    .post(parseUrlencoded, parseJSON, (req, res) => {
        try {
            var insertParams = [req.body.telemetryUnit, req.body.name];
            db.query('INSERT INTO telemetryTypes (telemetryUnit, name) VALUES (?, ?)', insertParams, (error, results, fields) => {
                if (error) throw error;
                res.json({newTelemType:results.insertId});
                //res.json(200);
            });
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    });

router.route('/:id')
    .put(parseUrlencoded, parseJSON, (req, res) => {
        try {
            var updateParams = [req.body.name, req.body.telemetryUnit, req.params.id];

            db.query("UPDATE telemetryTypes SET name = ?, telemetryUnit = ? " +
                "WHERE telemetryTypeID = ?", updateParams, function (error, results, fields) {
                if (error) throw error;
                res.json({updateTelemetryType:results.insertId});
                //res.sendStatus(200);
            });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })

    .delete(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("DELETE FROM telemetryTypes WHERE telemetryTypeID = ?", req.params.id, function(error, results, fields) {
                if (error) throw error;
                res.json({byeTelemetryType:results.insertId});
                //res.sendStatus(200);
            })
        } catch(err) {
            console.log(err);
            res.send(err);
        }
    })

module.exports = router;