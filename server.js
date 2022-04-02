const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const port = 2070;


app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("vista", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
});

db.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("concetado al servidor con el id" + db.threadId);
});

app.listen(port, () => {
    console.log("el puerto anda mortal ");
});


