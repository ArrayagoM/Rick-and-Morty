import { useSelector } from 'react-redux';
import style from './Favorites.module.css';
import { Link } from 'react-router-dom';



const Favorites = () => {
    const {  myFavorites } = useSelector(state => state)
    
    
    
    return (
         <div className={style.Card}>
           {
            myFavorites.map((c) => {
                return (
                    <div>
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
    )
}




export default Favorites;