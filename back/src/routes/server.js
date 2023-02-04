const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const app = express();

app.use(express.json())
app.use(morgan())

app.get('/rickandmorty/character/:id', async (req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
 const { id } = req.params;
   try {
    const respons = await axios (`https://rickandmortyapi.com/api/character/${id}`)
    const data = respons.data;
    const infoCharacter = {
        id: data.id,
        name: data.name,
        species: data.species,
        gender: data.gender,
        imge: data.image
    }
    res.status(200).json(infoCharacter);
 
} catch (error) {
    res.status(404).send(error.message);
   }

})


app.get('/rickandmorty/detail/:detailId', async(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { detailId } = req.params;
        const response = (await axios (`https://rickandmortyapi.com/api/character/${detailId}`)).data
        const infoCharacterDetail = {
            name: response?.name,
            status: response?.status,
            species: response?.species,
            gender: response?.gender,
            origin: response?.origin.name,
            image: response?.image,
            
        }
        
        res.status(200).json(infoCharacterDetail)

    } catch (error) {
        res.status(404).send(error.message); 
    }
})


let fav = [];

app.get('/rickandmorty/fav', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(fav);
})


app.post('/rickandmorty/fav', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    fav.push(req.body);

    res.status(200).send('Datos guardados  correctamente')
})


app.delete('/rickandmorty/fav/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
const favFilter = fav.filter(char => char.id !== parseInt(id));
fav = favFilter;

res.status(200).send('Se elimino correctamente')

})








module.exports = app;