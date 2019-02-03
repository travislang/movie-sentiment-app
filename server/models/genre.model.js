const Sequelize = require('Sequelize');
const sequelize = require('../modules/orm.config');

const config = {
    freezeTableName: true,
    underscored: true, // use snake_case not camelCase for attributes
}

const Artist = sequelize.define('artist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, config);

module.exports = Artist;