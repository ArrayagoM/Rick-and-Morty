import style from './App.module.css'
import axios from 'axios';
import { Routes,Route, useLocation, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App () {
const [characters, setCharacters] = useState([]);
const [ char, setCahr] = useState([]);
const [filteredCharacters, setFilteredCharacters] = useState([]);
const location =  useLocation();
const [access, setAccess] = useState(false);
const navigate = useNavigate();

const username = "juanmartinarrayago@gmail.com";
const password = "1234567";

const login = (userData) => {
if(userData.username === username && userData.password === password){
  setAccess(true);
  navigate("/home");
}
}


// const onDate = async (char) => {
// let data = (await axios (`https://rickandmortyapi.com/api/character/${char}`)).data;
// console.log(data);
// return data;
// }

// Función que se ejecuta cuando se busca un personaje
const onSearch = (character) => {
   // Se hace una petición a la API utilizando el ID del personaje buscado
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
  .then((response) => response.json())
  .then((data) => {
    // Si la respuesta incluye un nombre, significa que se ha encontrado un personaje
      if (data.name) {
          // Comprobar si el personaje ya está en el estado
          if (characters.find(char => char.id === data.id)) {
              window.alert('Este personaje ya ha sido agregado');
          } else {
            // Se agrega el personaje al estado
              setCharacters((oldChars) => [...oldChars, data]);
          }
      } else {
         // Si no se encuentra un personaje con el ID buscado, se muestra una alerta
          window.alert('No hay personajes con ese ID');
      }
  });
}
// Función que se ejecuta cuando se cierra una tarjeta de personaje
const onClose = (id) => {
   // Se actualiza el estado quitando el personaje con el ID especificado
  setCharacters(
    characters.filter(character => character.id !== id)
  )
}

  // useEffect para obtener los personajes de la API al iniciar la aplicación
  useEffect(() => {
  !access && navigate('/')
  }, [access]);

 

  return (
    <div className={style.App} style={{ padding: '25px' }}>
  { location.pathname === '/' ? <Form login={login} />:  <Nav onSearch={onSearch} />}
  <hr/>
 <Routes>
 <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>} />
 
  <Route path='/form' element={<Form/>}/>
   <Route path='/about' element={<About/>}/>
  <Route path='/favorites' element={<Favorites/>}/>
   <Route path='/detail/:detailId' element={<Detail/>}/>
 </Routes>
<hr/>
{/* <Cards characters={character}/> */}
  
</div>
  )
}


export default App;
