const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// Receta con las siguientes propiedades:
// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso


module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    score: {
      type: DataTypes.FLOAT,
      defaultValue: 0, 
      validate : {
        max: 100,
        min: 0
      }
    }, 
    healthScore: {
      type: DataTypes.FLOAT, 
      defaultValue: 0,
      validate: {
        max:100,
        min: 0
      }
    }, 
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    }, 
    image: {
      type: DataTypes.TEXT
    }, 
  });
};

