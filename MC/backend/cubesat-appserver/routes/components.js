const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
var db = require('../database');

router.route('/')
    // GET /components returns all components
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("SELECT * FROM components", function (error, results, fields) {
                if (error) throw error;
                res.send(results);
              });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })

    // POST /components inserts a new component into the database
    .post(parseUrlencoded, parseJSON, (req, res) => {
        try {
            var insertParams = [req.body.systemID, req.body.name];
            db.query('INSERT INTO components (systemID, name) VALUES (?, ?)', insertParams, (error, results, fields) => {
                if (error) throw error;
                res.json({newComp:results.insertId});
                //res.json(200);
            });
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    });

router.route('/:ID')
    // PUT /components/:componentID updates an existing component
    .put(parseUrlencoded, parseJSON, (req, res) => {
        try {
            var updateParams = [req.body.systemID, req.body.name, req.params.ID];
            db.query('UPDATE components SET systemID = ?, name = ? WHERE componentID = ?', updateParams, (error, results, fields) => {
                if (error) throw error;
                res.json({updateComp: results.insertId});
                //res.json(200);
            })
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    })

    // DELETE /components/:componentID removes an existing component and all of its associated componentTelemetries
    .delete(parseUrlencoded, parseJSON, (req, res) => {

        try {
            // delete all componentTelemetries with this componentID
            db.query("DELETE FROM componentTelemetry WHERE componentID = ?", req.params.ID, function(error, results, fields) {
                
                // then delete the component itself from the component table
                try {
                    db.query("DELETE FROM components WHERE componentID = ?", req.params.ID, function(error, results, fields) {
                        if (error) throw error;
                        res.json({byeComp: results.insertId});
                        //res.sendStatus(200);
                    })
                } catch(err) {
                    console.log(err);
                    res.send(err);
                }
            
            })
        } catch(err) {
            console.log(err);
            res.send(err);
        }
    })

    // GET /components/:systemID returns all components associated with the systemID specified as a parameter
    .get(parseUrlencoded, parseJSON, (req, res) => {
        try {
            db.query("SELECT * FROM components WHERE systemID = ?", req.params.ID, function(error, results, fields) {
                if (error) throw error;
                res.send(results);
            })
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })

module.exports = router;