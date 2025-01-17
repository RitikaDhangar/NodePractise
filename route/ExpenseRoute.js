const express=require('express')
const Router = express.Router();
const expenseController=require('../controller/ExpenseController')
Router.post('/add-expense', expenseController.addNewExpense)
Router.get('/fetch-expenses', expenseController.fetchAllExpenses)
Router.delete('/delete-expense/:id', expenseController.deleteExpense)
module.exports=Router