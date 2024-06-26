const TheoDoi = require('../models/TheoDoi');
const db = require('../models/index');

const { sendPushNotification } = require('../utils/sendPushNoti')
const { getTicketById } = require('../services/ticket.service')

const insertFollower = async (tbId, tickketArray, priceList) => {
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
            console.log(device.id, tickketArray[i], parseInt(priceList[i]))
            await db.TheoDoi.create({
                tbId: device.id,
                cdId: tickketArray[i],
                gia_ve: parseInt(priceList[i])
            })
        }


    } catch (error) {
        console.error(error)
    }
}


const checkAllPrice = async () => {
    try {
        const followList = await db.TheoDoi.findAll()

        for (let i = 0; i < followList.length; i++) {
            const ticket = await db.ChuyenDi.findOne({ where: { id: followList[i].cdId } })

            if (ticket) {
                if (ticket.gia_ve < followList[i].gia_ve) {
                    await db.TheoDoi.update({ gia_ve: ticket.gia_ve }, { where: { id: followList[i].id } })

                    const device = await db.ThietBi.findOne({ where: { id: followList[i].tbId } })

                    const point1 = await db.DiemDung.findOne({ where: { id: ticket.diem_di } })
                    const point2 = await db.DiemDung.findOne({ where: { id: ticket.diem_den } })

                    const title = 'Giá vé giảm !!!'
                    const body = 'Giá vé của chuyến đi từ ' + point1.ten + ' đến ' + point2.ten + ' đã giảm'

                    // const ticketData = await getTicketById(ticket.id)
                    await sendPushNotification(device.token, title, body, ticket.id)
                }
            }
        }

    } catch (error) {
        console.error(error)
    }

}

module.exports = { insertFollower, checkAllPrice }