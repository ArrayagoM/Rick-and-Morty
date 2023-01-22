import './App.css';
import Characters from './component/Characters';
import{ Routes, Route} from 'react-router-dom';
import Landing from './component/landing/Landing';
import CharacterDetail from './component/CharactersDetail/chararcterDetail';


function App() {
  return (
    <Routes className='App'>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/home' element={<Characters/>}/>
      <Route path='/detail/:id' element={<CharacterDetail/>}/>
      <Route path='/?name=' element={<CharacterDetail/>}/>
    </Routes>
  );
}

export default App;
