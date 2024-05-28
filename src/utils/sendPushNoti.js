const admin = require('firebase-admin');
const serviceAccount = require('../fcm.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const sendPushNotification = async (registrationToken, title, body) => {

    const message = {
        data: {
            title: title,
            body: body
        },
        token: registrationToken
    };
    console.log(message)

    if (registrationToken) {
        await admin.messaging().send(message)
            .then((response) => {
                console.log('Successfully sent message:', response);
            })
            .catch((error) => {
                console.log('Error sending message:', error);
            });
    } else {
        console.log('No registration token provided');
    }
}

module.exports = { sendPushNotification }