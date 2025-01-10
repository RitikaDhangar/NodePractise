const express = require("express");
const sequelize=require('./utils/database')
const app = express();
const cors = require("cors");
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
const storeRoutes = require("./routes/store");
app.use(storeRoutes);

// Connection
const appListener = async() => {
    try {
        await sequelize.sync();
        app.listen(8000) 
    } catch (err) {
        console.log(err);
    } 
}

appListener()