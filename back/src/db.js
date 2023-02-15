require('dotenv').config();
const { Sequelize } = require('sequelize');
const Character = require('./models/Character');
const Favorite = require('./models/favorite');
const { 
   DB_USER, 
   DB_PASSWORD, 
   DB_HOST, 
   DB_NAME, 
   DB_DEPLOY } = process.env;

/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
// const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//    { logging: false, native: false }
// );

const database = new Sequelize(DB_DEPLOY,
   { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/

Character(database);
Favorite(database);




module.exports = {
   ...database.models,
   database,
};