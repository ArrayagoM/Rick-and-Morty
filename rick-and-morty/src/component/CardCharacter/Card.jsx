import { Link } from "react-router-dom";

const Card = ({id, name, image, gender}) => {
return(
    <div>
        <Link to={`/detail/${id}`}>
            <img src={image} alt={name} />
        </Link>
        <h1>{name}</h1>
        <h2>{gender}</h2>
    </div>
)
}


export default Card;