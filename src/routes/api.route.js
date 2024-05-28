const express = require("express");
const router = express.Router();

const { searchTicketHandler, getTicketPrice, getCarInformation, getTicketByIdHandler } = require('../controllers/ticket.controller')
const { getStopHandler } = require('../controllers/stop.controller');
const { checkLogin, register } = require("../controllers/user.controller");

const { followTicketHandler } = require('../controllers/follow.controller')

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

// router.use(bodyParser.json());

router.get('/search-ticket', searchTicketHandler)
router.get('/get-stop', getStopHandler)
router.get('/get-price', getTicketPrice)
router.get('/get-car', getCarInformation)
router.get('/get-ticket', getTicketByIdHandler)
router.post('/login', checkLogin)
router.post('/register', register)
router.post('/follow', followTicketHandler)

module.exports = router