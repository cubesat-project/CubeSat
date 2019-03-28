const sendSMS = require('./send-sms');
const db = require('../database');
const getUser = require('../getUser');

function dataDump(data) {

    for (reading = 0; reading < data.length; reading++) {
        let thisReading = data[reading];
        try {
            db.query("SELECT upperBound, lowerBound FROM componentTelemetry WHERE componentTelemetryID = ?", [thisReading.componentTelemetryID], function(error, results, fields) {
                if (error) throw error;
                compare(thisReading.telemetryValue, results[0].upperBound, results[0].lowerBound, thisReading.componentTelemetryID);
            })
        } catch (err) {
            console.log(err);
        }
    }
}

function compare(reading, upper, lower, id) {
    console.log("comparing reading: %s for componentTelemID: %s whose upperBound and lowerBound are: %s, %s", reading, id, upper, lower);
    if (reading < lower || reading > upper) {
        // get the system ID of this componentTelemetry and then get all the users who are subscribed
        try {
            db.query("SELECT systemID FROM components WHERE componentID = (SELECT componentID FROM componentTelemetry WHERE componentTelemetryID = ? LIMIT 1)", [id], function(error, results, fields) {
                if (error) throw error;
                let sysID = results[0].systemID;
                console.log("systemID associated with out of bounds is " + sysID);
                db.query("SELECT userID FROM userAlertSubscriptions WHERE systemID = ?", [sysID], function(error, results, fields) {
                    if (error) throw error;
                    for(i = 0; i < results.length; i++) {
                        // query for phone number of each user then send text
                        // sendSMS(phoneNum, systemName, componentName, telemetryName, value, telemType)
                        getUser(results[i].userID).then(function(user) {
                            console.log("user phone num is " + user.phone);
                            db.query("SELECT systemName, compName, compTelemName, telemUnit FROM (SELECT sys.systemName as 'systemName', comp.name as 'compName', " +
                            "telem.name as 'compTelemName', telemTypes.telemetryUnit as 'telemUnit', telem.componentTelemetryID as 'compTelemID' FROM " +
                            "systems sys INNER JOIN components comp ON sys.systemID = comp.systemID INNER JOIN componentTelemetry telem ON comp.componentID = telem.componentID " +
                            "INNER JOIN telemetryTypes telemTypes ON telem.telemetryTypeID = telemTypes.telemetryTypeID) AS intermediate WHERE compTelemID = ? LIMIT 1", [id], function(error, results, fields) {
                                if (error) throw error;
                                sendSMS.sendSMS(user.phone, results[0].systemName, results[0].compName, results[0].compTelemName, reading, results[0].telemUnit);
                            })
                        }).catch(err => {
                            console.log("error getting phone num: " + err);
                        })
                    }
                })
            })
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports.dataDump = dataDump;


