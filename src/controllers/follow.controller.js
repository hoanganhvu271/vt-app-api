
const { insertFollower, checkAllPrice } = require('../services/follow.service')



const followTicketHandler = async (req, res) => {
    try {
        const tbId = req.body.tbId;
        const cdId = req.body.cdId;
        const gia = req.body.price;

        console.log(cdId)

        ticketArray = JSON.parse(cdId)
        priceList = JSON.parse(gia)
        console.log(ticketArray, priceList)

        await insertFollower(tbId, ticketArray, priceList);

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

module.exports = { followTicketHandler, checkTicketPrice }


