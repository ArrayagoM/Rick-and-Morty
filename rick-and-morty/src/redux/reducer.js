import { GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL,CLEAN_CHARACTER, DETAIL_NAME, CLEAN_NAME } from "./action-type";

const initialState = {
    characters: [],
    charName:[],
    characterDetail: {}
}

const reducer = (state=initialState, action) => {
switch(action.type){
case GET_CHARACTERS:
    return {
        ...state,
        characters: action.payload
    }
    case DETAIL_NAME:
        return {
            ...state,
            charName: action.payload,
        }

        case CLEAN_NAME:
            return {
                ...state,
                charName: []
            }

    case CHARACTER_DETAIL:
        return {
            ...state,
            characterDetail: action.payload
        }

    case CLEAN_DETAIL:
        return {
            ...state,
            characterDetail:{}
        }

    case CLEAN_CHARACTER:
    return {
        ...state,
        characters:[]
    }
    
    default:
        return {...state}
}
}

export default reducer;