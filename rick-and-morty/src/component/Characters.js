import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../redux/action";
import Card from "./CardCharacter/Card";
import { Link } from "react-router-dom";

const Characters = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return(
        <div>
            <buttom>
                <Link to='/'>
                    Landing
                </Link>
            </buttom>
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