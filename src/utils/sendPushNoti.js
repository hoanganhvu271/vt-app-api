const admin = require('firebase-admin');
const serviceAccount = require('../fcm.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const sendPushNotification = async (registrationToken, title, body, ticket) => {
    const message = {
        data: {
            title: title,
            body: body,
            ticket: ticket
        },
        token: registrationToken
    };
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