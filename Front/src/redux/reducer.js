import { TOGGLE_FAVORITE } from "./action-type";

const initialState = {
    fav : [],
    charFav: {}
}



const reducer = (state = initialState, action)=> {
  switch(action.type){
    case TOGGLE_FAVORITE:
// Obtengo el id de la tarjeta
      const cardId = action.payload;
// Busco el id de la tarjeta en el arreglo de favoritos
      const index = state.fav.indexOf(cardId);
// Si la tarjeta no está marcada como favorita, la agregamos al arreglo
      if( index === -1){
        return {
          ...state,
          fav : [...state.fav, cardId]
// Si la tarjeta está marcada como favorita, la eliminamos del arreglo
        };
      }else {
        return {
          ...state,
          fav: [
            ...state.fav.slice(0, index),
            ...state.fav.slice(index +1)
          ]
        }
      }
// Si la tarjeta está marcada como favorita, la eliminamos del arreglo
    default:
        return {...state}
  }
}




export default reducer;
