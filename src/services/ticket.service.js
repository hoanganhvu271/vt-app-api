
const db = require("../models/index");
const searchTicket = async (from, to, time) => {

    try {
        const start = await db.DiemDung.findAll(
            { where: { dia_diem: from } }
        )

        const end = await db.DiemDung.findAll(
            { where: { dia_diem: to } }
        )

        const carList = await db.Xe.findAll()

        var ticketList = []


        for (let i = 0; i < start.length; i++) {
            for (let j = 0; j < end.length; j++) {

                const tourList = await db.ChuyenDi.findAll({
                    where: {
                        diem_di: start[i].id,
                        diem_den: end[j].id,
                        xuat_phat: {
                            [db.Sequelize.Op.like]: `${time}%`
                        }
                    },
                    raw: true
                })
                tourList.forEach(tour => {
                    if (tour.con_lai > 0) {
                        tour.diem_di = start[i].ten
                        tour.diem_den = end[j].ten
                        for (var k = 0; k < carList.length; k++) {
                            if (tour.id_xe == carList[k].id) {
                                tour.so_cho = carList[k].so_cho
                                tour.ten_nha_xe = carList[k].ten_nha_xe
                            }
                        }
                        ticketList.push(tour)

                    }
                });
            }
        }
        // console.log(resList)


        if (ticketList.length > 0) {
            return { code: 1, data: ticketList }
        }
        else {
            return { code: 0 }
        }
    }
    catch (e) {
        console.log(e)
        return { code: -1 }
    }


}

module.exports = { searchTicket }