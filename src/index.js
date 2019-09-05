const express = require("express");
const corsMiddleware = require("cors");

const app = express();

const PORT = require("./connection/port");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware());

const productsRoutes = require("./products/productsRoutes");
const singupRoutes = require("./signup/songupRoutes");
const usersRoutes = require("./users/usersRoutes");
const ordersRoutes = require("./orders/ordersRoutes");

/*
 * ROUTERS
 */
app.get("/", (req, res) => res.json("YES, server WORK=)"));

app.use("/products", productsRoutes);

app.use("/signup", singupRoutes);

app.use("/users", usersRoutes);

app.use("/orders", ordersRoutes);

// app.use("/user");

/*
 * PORT
 */
app.listen(PORT.PORT, () => console.log(PORT.PORT));
