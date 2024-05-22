require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 9999;
const apiRoutes = require("./routes/api.route");

const { connection } = require("./config/connectDB");
//test connection
connection();


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


//config req body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data


app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

