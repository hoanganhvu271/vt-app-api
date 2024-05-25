const db = require("../models/index");

const createNewUser = async (user) => {
    try {
        const newUser = await db.NguoiDung.create(user);
        return true
    } catch (error) {
        console.log(error);
        return false;
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