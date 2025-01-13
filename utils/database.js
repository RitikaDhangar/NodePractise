const Sequelize=require('sequelize')
const sequelize = new Sequelize('expensetracker', 'root', 'Ritika000@', {
    host: 'localhost',
    dialect:'mysql'
})
module.exports=sequelize