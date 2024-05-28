const db = require('../models/index');

const insertFollower = async (tbId, cdId) => {
    try {
        await db.TheoDoi.create({
            tbId: tbId,
            cdId: cdId
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = { insertFollower }