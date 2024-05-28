require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 9999;
const apiRoutes = require("./routes/api.route");

const { sendPushNotification } = require("./controllers/follow.controller")

const { connection } = require("./config/connectDB");
//test connection
connection();


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


//config req body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data


app.use("/api", apiRoutes);

const registrationToken = 'fiN7-ZhFR-efPKtevy-gGw:APA91bFTpdTeWpGa92SrRASQNrurSDmJACDjNnj6rs3w1FC1TOQ2MmISanfoNZmfh1NSWtQZ-7h6IFiATjS13hiuXUdH4NjCNYGBsuqQZVdlwRSJsNwWca-SIL39TYl3Tw3V--Cb-1Ep';
const title = 'Giá vé giảm!';
const body = 'Giá vé hiện tại là $80. Hãy mua ngay!';
sendPushNotification(registrationToken, title, body);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

