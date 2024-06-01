
const { searchTicket, getTicketPriceById,
    getCarInfomationById, getTicketById, getPurchasedTicketById } = require('../services/ticket.service')

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

const getCarInformation = async (req, res) => {
    var id = req.query.id
    try {
        var car = await getCarInfomationById(id)
        // console.log(car)
        if (car != null) {
            var response = {
                status: 200,
                message: "OK",
                data: car
            }
            res.status(200).json(response)
        }
        else {
            var response = {
                status: 404,
                message: "Not found car",
            }
            res.status(404).json(response)
        }
    }
    catch (err) {
        console.log(err)
        var response = {
            status: 500,
            message: "Server Error",
        }
        res.status(500).json(response)
    }

}

const getTicketByIdHandler = async (req, res) => {
    var id = req.query.id
    try {
        var ticket = await getTicketById(id)
        // console.log(ticket)
        if (ticket != null) {
            var response = {
                status: 200,
                message: "OK",
                data: ticket
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

const getPurchasedTicketByIdHandler = async () => {
    var id = req.headers['access-token'];
    const decoded = await jwtHelper.verifyToken(id, "hav271");
    const userId = decoded.data.id;


    try {
        var ticket = await getPurchasedTicketById(userId)
        if (ticket) {
            res.status(200).json({
                status: 200,
                message: "OK",
                data: ticket
            })
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Not found ticket"
            })

        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            message: "Server Error"
        })
    }
}

module.exports = { searchTicketHandler, getTicketPrice, getCarInformation, getTicketByIdHandler, getPurchasedTicketByIdHandler }
