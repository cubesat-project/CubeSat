const dotenv = require('dotenv');
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNTSID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function sendSMS(phoneNum, systemName, componentName, telemetryName, value, telemType) {
  if (phoneNum != undefined) {
    let dateTime = new Date().toUTCString();
    let bod = '\nThis is a CubeSat alert.\nSystem: ' + systemName + ',\nComponent: ' + componentName + ',\nTelemetry Name: ' + telemetryName + ',\nValue: ' + value + telemType + '\nDate/Time: ' + dateTime;
    client.messages
      .create({
         body: bod,
         from: process.env.TWILIO_NUM,
         to: phoneNum
        })
      .then(message => console.log(message.sid));
  }

}

module.exports.sendSMS = sendSMS;