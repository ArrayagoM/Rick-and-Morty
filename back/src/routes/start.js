const app = require('./server');
const {  database } = require('../db');
const saveApiData = require('../controllers/saveApiData');
const port = process.env.PORT || 3001; 
database.sync({ force: true }).then(async () => {
    console.log('DB conectada, master');
    // console.log(await saveApiData());
    await saveApiData();
    app.listen(port, () => {
        console.log(`Server on port ${port}`);
    })
}).catch((error) => {
    console.log(error);
})
