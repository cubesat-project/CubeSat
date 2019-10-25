const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

/**
 * Gets the user with the given userId.
 *
 * @param {String} userId The userId of the user to find.
 * @returns A promise that will resolve with the user object.
 */
const getUser = (userId) => {
    const promise = new Promise((resolve, reject) => {
        // Get the user given by userId from the user pool
        cognitoIdentityServiceProvider.adminGetUser({
            UserPoolId: process.env.AWS_USER_POOL_ID,
            Username: userId
        }, (err, data) => {
            if (err) {
                // An error occurred, so reject with the error
                reject(err);
            } else {
                // Found the user, convert to a nice object for returning
                const user = {
                    status: data.UserStatus
                };

                data.UserAttributes.forEach((att) => {
                    if (att.Name === 'email') {
                        user.email = att.Value;
                    } else if (att.Name === 'custom:administrator') {
                        user.administrator = att.Value === 'true';
                    } else if (att.Name === 'sub') {
                        user.id = att.Value;
                    } else if (att.Name === 'phone_number') {
                        user.phone = att.Value;
                    } else if (att.Name === 'custom:prefContactMethod') {
                        user.preferredContactMethod = att.Value;
                    }
                });

                resolve(user);
            }
        });
    });

    return promise;
}

module.exports = getUser;
