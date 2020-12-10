'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trail.belongsTo(models.Location, {foreignKey: "locationId"})
    }
  };
  Trail.init({
    name: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    length: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trail',
  });
  return Trail;
};