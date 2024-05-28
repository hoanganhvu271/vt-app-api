const TheoDoi = require('../models/TheoDoi');
const db = require('../models/index');

const insertFollower = async (tbId, cdId) => {
    try {

        //insert new device
        //insert new device
        let device = await db.ThietBi.findOne({ where: { token: tbId } })

        if (!device) {
            device = await db.ThietBi.create({ token: tbId })
        }

        //check existing
        const follower = await db.TheoDoi.findOne({
            where: {
                tbId: device.id,
                cdId: cdId
            }

        })

        if (follower) {
            return
        }

        await db.TheoDoi.create({
            tbId: device.id,
            cdId: cdId
        })

    } catch (error) {
        console.error(error)
    }
}

module.exports = { insertFollower }