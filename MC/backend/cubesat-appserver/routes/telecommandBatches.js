const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');

router.route('/')
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("SELECT * FROM telecommandBatches;", function (error, results, fields) {
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
            var telecommandBatchName = req.body.name;

            // using this pattern of using ? in our query builder does the escaping for us! No need to worry about sql injection
            db.query('INSERT INTO telecommandBatches (name) VALUES (?)', telecommandBatchName, function (error, results, fields) {
                if (error) throw error;

                res.json(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

router.route('/:batchID')
    .put(parseUrlencoded, parseJSON, (req, res) => {
        try {

            var updateParams = [req.body.name, req.params.batchID];

            db.query("UPDATE telecommandBatches SET name = ? WHERE batchID = ?;", updateParams, function (error, results, fields) {
                if (error) throw error;

                res.send(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })    
    .delete(parseUrlencoded, parseJSON, (req, res) => {
        try {
            var batchToDelete =  req.params.batchID;

            db.query("DELETE FROM presetTelecommands WHERE batchID = ?;", batchToDelete, function (error, results, fields) {
                if (error) throw error;

                db.query("DELETE FROM telecommandBatches WHERE batchID = ?;", batchToDelete, function (error, results, fields) {
                    if (error) throw error;
    
                    res.send(results);
                });
            });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

module.exports = router;