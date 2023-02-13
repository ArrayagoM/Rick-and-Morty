const app = require('./server');
// const { database } = require('../db.js');

app.listen(3001, () => {
  console.log('Servidor Express corriendo en el puerto 3001');
});

// database.sync({force: true}).then(()=> {
//   console.log('Datagase connnected, master');
 
// })
