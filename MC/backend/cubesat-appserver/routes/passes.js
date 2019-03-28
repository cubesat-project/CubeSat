const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');

router.route('/')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("Select passes.*, COALESCE(passExecutedTelecommandsCount, 0) as numberOfTelecommandsToBeExecuted, COALESCE(passTransmittedTelecommandsCount, 0) as numberOfTelecommandsToBeTransmitted FROM passes LEFT JOIN (SELECT executionPassID, Count(*) as passExecutedTelecommandsCount from queuedTelecommands group by executionPassID) as executedTelecommandsCount on passes.passID = executedTelecommandsCount.executionPassID LEFT JOIN (SELECT transmissionPassID, Count(*) as passTransmittedTelecommandsCount from queuedTelecommands group by transmissionPassID) as transmittedTelecommandsCount on passes.passID = transmittedTelecommandsCount.transmissionPassID ORDER BY passID;", function (error, results, fields) {
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
            var insertParameters = [req.body.passHasOccurred, req.body.estimatedPassDateTime, req.body.availablePower, req.body.availableBandwidth];

            // using this pattern of using ? in our query builder does the escaping for us! No need to worry about sql injection
            db.query('INSERT INTO passes (passHasOccurred, estimatedPassDateTime, availablePower, availableBandwidth) VALUES (?, ?, ?, ?)', insertParameters, function (error, results, fields) {
                if (error) throw error;

                res.json(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

router.route('/:id')
    .put(parseUrlencoded, parseJSON, (req, res) => {
        try {

            var passToUpdate = req.params.id;
            var updateParameters = [req.body.passHasOccurred, req.body.estimatedPassDateTime, passToUpdate];

            db.query('UPDATE passes SET passHasOccurred = ?, estimatedPassDateTime = ? WHERE telecommandID = ?', updateParameters, function (error, results, fields) {
                if (error) throw error;

                res.json(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

router.route('/transmission-sum')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query('SELECT pass.passID, SUM(bandwidthUsage) as sumBandwidth, SUM(powerConsumption) as sumPower ' + 
                'FROM cubesat.passes as pass ' +
                'RIGHT JOIN cubesat.queuedTelecommands as qtc ' +
                'ON pass.passID = qtc.transmissionPassID ' +
                'LEFT JOIN cubesat.telecommands as tc ' + 
                'ON qtc.telecommandID = tc.telecommandID ' + 
                'GROUP BY pass.passID;', function (error, results, fields){
                if (error) throw error;
                if (!results) {
                    console.log(results);
                    res.send({error:'no results'});
                }
                res.json(results);
            })
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

router.route('/execution-sum')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query('SELECT pass.passID, SUM(bandwidthUsage) as sumBandwidth, SUM(powerConsumption) as sumPower ' + 
                'FROM cubesat.passes as pass ' +
                'RIGHT JOIN cubesat.queuedTelecommands as qtc ' +
                'ON pass.passID = qtc.executionPassID ' +
                'LEFT JOIN cubesat.telecommands as tc ' + 
                'ON qtc.telecommandID = tc.telecommandID ' + 
                'GROUP BY pass.passID;', function (error, results, fields){
                if (error) throw error;
                if (!results) {
                    console.log(results);
                    res.send({error:'no results'});
                }
                res.json(results);
            })
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

module.exports = router;