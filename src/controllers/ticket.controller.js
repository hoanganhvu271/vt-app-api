
const { searchTicket, getTicketPriceById } = require('../services/ticket.service')

const searchTicketHandler = async (req, res) => {
    var from = req.query.fr
    var to = req.query.to
    var time = req.query.time

    try {
        var result = await searchTicket(from, to, time)
        // console.log(result)
        if (result.code == 1) {
            var response = {
                status: 200,
                message: "OK",
                data: result.data
            }

            res.status(200).json(response)
        }
        else if (result.code == 0) {
            var response = {
                status: 404,
                message: "Not found ticket",
            }

            res.status(404).json(response)
        }
        else {
            var response = {
                status: 500,
                message: "Server Error",
            }

            res.status(500).json(response)
        }
    }
    catch (e) {
        console.log(e)
        var response = {
            status: 500,
            message: "Server Error",
        }

        res.status(500).json(response)
    }

}

const getTicketPrice = async (req, res) => {
    var id = req.query.id

    try {
        var price = await getTicketPriceById(id)
        console.log(price)
        if (price != -1) {
            var response = {
                status: 200,
                message: "OK",
                data: price
            }


            res.status(200).json(response)
        }
        else {
            var response = {
                status: 404,
                message: "Not found ticket",
            }

            res.status(404).json(response)
        }
    }
    catch (e) {
        console.log(e)
        var response = {
            status: 500,
            message: "Server Error",
        }

        res.status(500).json(response)
    }
}

module.exports = { searchTicketHandler, getTicketPrice }
