const db = require("../models/index");

const getAllStop = async () => {
    try {
        var result = await db.DiaDiem.findAll()

        if (result.length > 0) {
            return { code: 1, data: result }
        }
        else {
            return { code: 0 }
        }
    } catch (error) {
        console.log(error)
        return { code: -1 }
    }

}

module.exports = { getAllStop }