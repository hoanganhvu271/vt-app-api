
const db = require('../models/index');
const solveBilling = async (bill, qrcode, userId) => {
    try {

        const user = await db.NguoiDung.findOne({
            where: {
                ten: userId
            }
        })
        await db.Ve.create({
            id_chuyen_di: bill.id_chuyen_di,
            id_nguoi_dung: user.id,
            qr_code: qrcode,
            created_at: bill.time,
            used: 0,
            zalo_token: bill.z_token
        })
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}


module.exports = { solveBilling }