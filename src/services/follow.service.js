const TheoDoi = require('../models/TheoDoi');
const db = require('../models/index');

const insertFollower = async (tbId, tickketArray) => {
    try {

        //insert new device
        //insert new device
        let device = await db.ThietBi.findOne({ where: { token: tbId } })

        if (!device) {
            device = await db.ThietBi.create({ token: tbId })
        }

        //delete
        await db.TheoDoi.destroy({
            where: {
                tbId: device.id,
            }
        })


        for (let i = 0; i < tickketArray.length; i++) {
            await insertFollowerForTicket(device.id, tickketArray[i])
        }


    } catch (error) {
        console.error(error)
    }
}


const checkAllPrice = async () => {
    try {


    } catch (error) {
        console.error(error)
    }

}

module.exports = { insertFollower, checkAllPrice }