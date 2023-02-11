import React, { useState, useEffect } from 'react';
import{ useDispatch, useSelector } from 'react-redux';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/action';




export default function Card({id, name, species, gender, image, onClose }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)
  const [ isFav, setIsFav] = useState(false);

const handleFavorite = () => {
  if(isFav) {
    setIsFav(false);
    dispatch(deleteFavorite(id))
  }else {
    setIsFav(true);
    dispatch(addFavorite({id, name, species, gender, image, onClose }))
  }
}
useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [myFavorites]);

  
   return (
      <div className={style.Card}>
        {
        isFav ? (
         <button onClick={handleFavorite}>❤️</button>
        ) : (
        <button onClick={handleFavorite}>🤍</button>
        )
        }
         <button className={style.Card_btn} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
       <h2 className={style.Card_name}>{name}</h2>
       </Link>
         <h2 className={style.Card_species}>{species}</h2>
         <h2 className={style.Card_gender} >{gender}</h2>
         <img  src={image} alt={name} className={style.Card_image} />
         
      </div>
   );
}
