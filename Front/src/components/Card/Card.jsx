import React from 'react';
import{ useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/action'
import style from './Card.module.css';
import { Link } from 'react-router-dom';




export default function Card({id, name, species, gender, image, onClose,isFavorite }) {
   const dispatch = useDispatch();
   return (
      <div className={style.Card}>
         <button className={style.Card_btn} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
       <h2 className={style.Card_name}>{name}</h2>
       </Link>
         <h2 className={style.Card_species}>{species}</h2>
         <h2 className={style.Card_gender} >{gender}</h2>
         <img  src={image} alt={name} className={style.Card_image} />
         <button
        className={`${style.Card_favoriteBtn} ${isFavorite ? style.isFavorited : ''}`}
        onClick={() => dispatch(toggleFavorite(id))}
      >
        <i className="fas fa-heart" />
      </button>
      </div>
   );
}
