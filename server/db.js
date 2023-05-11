const { Sequelize } = require('sequelize')


module.exports = new Sequelize(

    process.env.DB_NAME, //data name
    process.env.DB_USER, //data user
    process.env.DB_PASSWORD, //data password
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }


)