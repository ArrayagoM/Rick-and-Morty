import { TOGGLE_FAVORITE } from "./action-type";

export const toggleFavorite = (cardId) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: cardId
    }
}



