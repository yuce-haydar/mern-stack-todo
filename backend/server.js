const { request, response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const hataYakala = require("../backend/middlewares/errorMiddleware");
const PORT = process.env.PORT;
const baglan = require("./config/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //bodyden gelecek veriyi yakalamak için

app.use("/api/notlar", require("./routes/notRoute")); //routers kullandık diye
app.use("/api/kullanicilar", require("./routes/kullaniciRoute")); //routers kullandık diye

app.use(hataYakala);
baglan();
app.listen(PORT, () => console.log(`portumuz ${PORT} üzerinden yayında `));
