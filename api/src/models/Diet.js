const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  return sequelize.define('diet', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};

