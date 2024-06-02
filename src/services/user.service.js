const db = require("../models/index");

const createNewUser = async (user) => {
    try {
        const newUser = await db.NguoiDung.create({
            username: user.username,
            password: user.password,
            ten: user.ten,
            ngay_sinh: user.ngay_sinh,
            gioi_tinh: user.gioi_tinh,
            cccd: user.cccd,
            email: user.email

        });
        return newUser
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getUserById = async (username) => {
    try {
        const user = await db.NguoiDung.findOne({
            where: {
                username: username
            }

        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { createNewUser, getUserById }