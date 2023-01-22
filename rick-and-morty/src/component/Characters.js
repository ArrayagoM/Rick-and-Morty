import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { getCharacters, getPage } from "../redux/action";
import Card from "./CardCharacter/Card";
import { Link } from "react-router-dom";


const Characters = () => {
    const dispatch = useDispatch();
    const [ page, setPage] = useState(1);
    const characters = useSelector((state) => state.characters);
   
const handleNext = () => {
setPage(+1)
}
const handleBack = () => {
    setPage(-1)
    }

    useEffect(() => {
       if(page >= 1){
        dispatch(getPage(page))
        console.log(page);
       }
    
      
    }, [])

    return(
        <div>
            <buttom>
                <Link to='/'>
                    Landing
                </Link>
            </buttom>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
            <h1>CHARACTERS:</h1>

            {
                characters.map((character) => {
                    return (
                        <Card
                            key={character?.id}
                            id={character?.id}
                            name={character?.name}
                            gender={character?.gender}
                            image={character?.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default Characters;