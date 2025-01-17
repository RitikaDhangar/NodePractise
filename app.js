const express = require('express')
const cors=require('cors')
const app = express(); 
const sequelize = require('./utils/database')
const UserRouter=require('./route/UserRoute')
const ExpenseRouter = require('./route/ExpenseRoute')
const Expense=require('./model/Expense')
const User=require('./model/User')
app.use(cors());
app.use(express.json());
// router
app.use(UserRouter)
app.use(ExpenseRouter)
User.hasMany(Expense);
Expense.belongsTo(User);
// connect to server
const connectSeverHandler = async() => {
    try {
        await sequelize.sync(); // WARNING: This drops and recreates all tables
        app.listen(8000)
    } catch (err) {
        console.log(err);
    }
}
connectSeverHandler()
