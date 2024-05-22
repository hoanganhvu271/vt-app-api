const express = require("express");
const router = express.Router();

const { searchTicketHandler } = require('../controllers/ticket.controller')
const { getStopHandler } = require('../controllers/stop.controller')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

router.get('/search-ticket', searchTicketHandler)
router.get('/get-stop', getStopHandler)

module.exports = router