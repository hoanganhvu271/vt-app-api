const admin = require('firebase-admin');
const serviceAccount = require('../fcm.json');
const { insertFollower, checkAllPrice } = require('../services/follow.service')

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

const followTicketHandler = async (req, res) => {
    try {
        const tbId = req.body.tbId;
        const cdId = req.body.cdId;

        ticketArray = JSON.parse(cdId)
        console.log(ticketArray)

        await insertFollower(tbId, ticketArray);

        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(error)
    }
}

const checkTicketPrice = async () => {
    try {
        await checkAllPrice();
    } catch (error) {
        console.error(error)
    }
}

module.exports = { sendPushNotification, followTicketHandler, checkTicketPrice }


