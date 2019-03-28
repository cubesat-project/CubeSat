const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');

router.route('/')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("SELECT * FROM telecommands;", function (error, results, fields) {
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
            var insertParameters = [req.body.componentID, req.body.command, req.body.name, req.body.defaultPriorityLevel, req.body.bandwidthUsage, req.body.powerConsumption, req.body.archived];

            // using this pattern of using ? in our query builder does the escaping for us! No need to worry about sql injection
            db.query('INSERT INTO telecommands (componentID, command, name, defaultPriorityLevel, bandwidthUsage, powerConsumption, archived) VALUES (?, ?, ?, ?, ?, ?, ?)', insertParameters, function (error, results, fields) {
                if (error) throw error;

                res.json(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

router.route('/:id')
    .delete(parseUrlencoded, parseJSON, (req, res) => {
        try {
            var telecommandToDelete = req.params.id;
            
            db.query('UPDATE telecommands SET archived = 1 WHERE telecommandID = ?', telecommandToDelete, function (error, results, fields) {
                if (error) throw error;

                res.json(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

module.exports = router;