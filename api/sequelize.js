const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: './sqlite/IncidentsList.db'
})

sequelize.sync({
    alter: true
}).then(() => {
    console.log('All models were synced')
});

module.exports = sequelize;
