const Sequelize=require('sequelize')
const sequelize = new Sequelize('shopping-App', 'root', 'Ritika000@', {
    dialect: 'mysql',
    host:'localhost'
})
module.exports=sequelize