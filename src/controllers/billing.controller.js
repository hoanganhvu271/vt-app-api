const { solveBilling } = require('../services/billing.service')
const qr = require('qrcode')
const jwtHelper = require('../helpers/jwt.helper')

const billingHandler = async (req, res) => {
    const bill = req.body
    console.log(bill)
    try {
        const billJson = JSON.stringify(bill)
        const qrcode = await qr.toDataURL(billJson)
        console.log(qrcode)

        var id = req.headers['access-token'];
        const decoded = await jwtHelper.verifyToken(id, "hav271");
        const userId = decoded.data.id;

        const data = await solveBilling(bill, qrcode, userId)
        if (data) {
            const response = {
                status: 200,
                message: "Success",
                data: qrcode
            }
            res.status(200).json(response)
        }
        else {
            const response = {
                status: 400,
                message: "Bad Request"
            }
            res.status(400).json(response)
        }
    } catch (error) {

        console.error(error)
        const response = {
            status: 500,
            message: "Internal Server Error"
        }
        res.status(500).json(response)
    }

}

module.exports = { billingHandler }