import { getCharacterDetail, cleanDetail } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const characterDetail = useSelector((state) => state.characterDetail);

    useEffect(() => {
        dispatch(getCharacterDetail(id));

        return () => dispatch(cleanDetail())
    }, [])

    return(
        <div>
            <img src={characterDetail.image} />
            <h1>{characterDetail?.name}</h1>

            <label  >Status:</label>
            <p>{characterDetail?.status}</p>

            <label>Gender:</label>
            <p>{characterDetail?.gender}</p>

            <label>Origin:</label>
            <p>{characterDetail?.origin?.name}</p>

            <button>
                <Link to='/home' > Back </Link>
            </button>
        </div>
    )
}

export default CharacterDetail;