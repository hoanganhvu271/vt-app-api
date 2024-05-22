const { getAllStop } = require('../services/stop.service')

const getStopHandler = async (req, res) => {
    try {
        const result = await getAllStop()
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

    } catch (error) {
        var response = {
            status: 500,
            message: "Server Error",
        }

        res.status(500).json(response)
    }
}

module.exports = { getStopHandler }