import { Link } from "react-router-dom";
import SearchBar from "../CharactersDetail/SearchBar/SearchBar";

const Landing = () => {
    return(
         <>
         <h1>welcome to Rick and Morty app</h1>
         <button>
            <Link to='/home'>Home</Link>
         </button>
        <SearchBar/>
         </>
    )
}


export default Landing;