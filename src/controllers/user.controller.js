
require('dotenv').config()
const jwtHelper = require("../helpers/jwt.helper");
const bcrypt = require('bcrypt');
const saltRounds = 10;
tokenList = {}

const { createNewUser, getUserById } = require("../services/user.service")

const register = async (req, res) => {

    var hashPassword = await bcrypt.hash(req.body.password, 10);
    var user = {
        username: req.body.username,
        password: hashPassword,
        ten: req.body.ten,
        ngay_sinh: req.body.ngay_sinh,
        gioi_tinh: req.body.gioi_tinh,
        cccd: req.body.cccd,
        email: req.body.email
    }

    var data = await createNewUser(user)
    console.log(data);
    if (data != null) {
        const response = {
            status: 200,
            message: "Đăng ký thành công"
        };
        res.status(200).json(response);
    }
    else {
        const response = {
            status: 500,
            message: "Server Error",
        };
        res.status(500).json(response);
    }


}

const checkLogin = async (req, res) => {

    if (!req.body.username || !req.body.password) {
        const response = {
            status: 404,
            message: "Yêu cầu điền thông tin đầy đủ",
        };
        res.status(400).json(response);
    }
    else {
        let user = await getUserById(req.body.username);
        if (user != null) {
            var ok = await bcrypt.compareSync(req.body.password, user.password);
            let response = {}
            if (ok) {
                const userData = {
                    id: req.body.username,
                    email: user.email
                };


                var token = await createTokenResponse(userData)

                response = {
                    status: 200,
                    message: "Đăng nhập thành công",
                    data: { user, token }
                };

                res.status(200).json(response);

            }
            else {
                response = {
                    status: 404,
                    message: "Thông tin tài khoản hoặc mật khẩu không chính xác",
                };

                res.status(404).json(response);

            }

        }
        else {
            const response = {
                status: 500,
                message: "Server Error",
            };
            res.status(500).json(response);
        }
    }



}

const createTokenResponse = async (userData) => {
    // //console.log(userData);
    const accessToken = await jwtHelper.generateToken(userData, "hav271", "240h");
    const refreshToken = await jwtHelper.generateToken(userData, "hav271", "240h");

    // Lưu lại 2 mã access & Refresh token, với key chính là cái refreshToken để đảm bảo unique và không sợ hacker sửa đổi dữ liệu truyền lên.
    tokenList[refreshToken] = { accessToken, refreshToken };

    return accessToken;
}

module.exports = { register, checkLogin }