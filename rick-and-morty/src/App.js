import './App.css';
import Characters from './component/Characters';
import{ Routes, Route} from 'react-router-dom';
import Landing from './component/landing/Landing';
import CharacterDetail from './component/CharactersDetail/chararcterDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Characters/>}/>
      <Route path='/detail/:id' element={<CharacterDetail/>}/>
    </Routes>
  );
}

export default App;
