const { solveBilling } = require('../services/billing.service')
const qr = require('qrcode')

const billingHandler = async (req, res, next) => {
    const bill = req.body
    console.log(bill)
    try {
        const billJson = JSON.stringify(bill)
        const qrcode = await qr.toDataURL(billJson)
        console.log(qrcode)
        const data = await solveBilling(bill, qrcode)
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