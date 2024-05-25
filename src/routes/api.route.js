const express = require("express");
const router = express.Router();

const { searchTicketHandler, getTicketPrice, getCarInformation, getTicketByIdHandler } = require('../controllers/ticket.controller')
const { getStopHandler } = require('../controllers/stop.controller')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

router.get('/search-ticket', searchTicketHandler)
router.get('/get-stop', getStopHandler)
router.get('/get-price', getTicketPrice)
router.get('/get-car', getCarInformation)
router.get('/get-ticket', getTicketByIdHandler)

module.exports = router