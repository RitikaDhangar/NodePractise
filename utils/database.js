const Sequelize=require('sequelize')
const sequelize = new Sequelize('shoppingapp', 'root', 'Ritika000@', {
    dialect: 'mysql',
    host:'localhost'
})

module.exports= sequelize