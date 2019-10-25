const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();

router.route('/')
    .get(parseUrlencoded, parseJSON, (req, res) => {
      try {
          response = {
              'statusCode': 200,
              'body': JSON.stringify({
                  message: 'This is the get route'
              })
          };
      } catch (err) {
          console.log(err);
          res.send(err);
      }

      res.send(response);
    })
    .post(parseUrlencoded, parseJSON, (req, res) => {
      try {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'This is the post route'
                })
            };
        } catch (err) {
            console.log(err);
            res.send(err);
        }

        res.send(response);
    });

module.exports = router;
