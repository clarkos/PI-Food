const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


// Receta con las siguientes propiedades:
// ID: *
// Nombre *


module.exports = (sequelize) => {
  // defino el modelo
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

