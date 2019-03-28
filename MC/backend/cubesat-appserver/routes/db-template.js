const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const db = new AWS.DynamoDB.DocumentClient();
const randomBytes = require('crypto').randomBytes;

router.route('/')
    .post(parseUrlencoded, parseJSON, (req, res) => {
        try {
            let data = req.body;

            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'Data added successfully'
                })
            };

            db.put({
                TableName: 'TemplateSimpleTable',
                Item: {
                    id: toUrlString(randomBytes(16)),
                    name: data.name,
                    age: data.age
                }
            }, (data, error) => {
                if (error) {
                    console.log(error);
                    res.send(error);
                }
                console.log('Success');
                res.send(response);
            });
        } catch (err) {
            console.log(err);
            return err;
        }
    });

function toUrlString(buffer) {
    return buffer.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

module.exports = router;