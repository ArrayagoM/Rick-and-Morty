import { useSelector, useDispatch } from 'react-redux';
import style from './Favorites.module.css';
import { Link } from 'react-router-dom';
import { orderCards, filterCards } from '../../redux/action';


const Favorites = () => {
    const dispatch = useDispatch();
    const {  myFavorites } = useSelector(state => state)
    
    const handlerOder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handlerFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    
    return (
       <div>
        <div>
    <select onChange={handlerOder} >
    <option value="oder" disabled='disabled'>Order By</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
    </select>
    <select onChange={handlerFilter}>
    <option value="filter" disabled='disabled'>Filter By</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unkown">Unkown</option>
        <option value="Genderless">Genderless</option>
    </select>
</div>
          <div className={style.Card}>
{
myFavorites.map((c) => {
    return (
        <div className={style.conteiner}>
        <button className={style.Card_btn} onClick={c.onClose}>X</button>
        <Link to={`/detail/${c.id}`}>
        <h2 className={style.Card_name}>{c.name}</h2>
        </Link>
        <h2 className={style.Card_species}>{c.species}</h2>
        <h2 className={style.Card_gender} >{c.gender}</h2>
         <img  src={c.image} alt={c.name} className={style.Card_image} />

        </div>
    )
})
}
</div>
       </div>
    )
}




export default Favorites;