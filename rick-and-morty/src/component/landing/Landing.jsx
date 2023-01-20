import { Link } from "react-router-dom";

const Landing = () => {
    return(
         <>
         <h1>welcome to Rick and Morty app</h1>
         <button>
            <Link to='/home'>Home</Link>
         </button>
         </>
    )
}


export default Landing;