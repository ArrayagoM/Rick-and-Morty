import axios from "axios";
import { GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL, CLEAN_CHARACTER, DETAIL_NAME, CLEAN_NAME } from "./action-type";


export const getCharacters = () => {
return async function(dispatch) {
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    return dispatch ( { type: GET_CHARACTERS, payload: res.data.results  } )
}
}

export const getCharacterDetail = (id) => {
    return async function(dispatch) {
        const res = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        return dispatch( { type: CHARACTER_DETAIL, payload: res.data } )
    }
}

export const getName = (name) => {
    return async function(dispatch) {
        let response = await axios(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return dispatch( { type: DETAIL_NAME, payload: response.data.results } )
    }
}
export const getPage = (page) => {
    return async function (dispatch) {
        let response = await axios (`https://rickandmortyapi.com/api/character/?page=${page}`);
        return dispatch ( { type: GET_CHARACTERS, payload: response.data.results } )
    }
}

export const cleanName = () => {
return { type: CLEAN_NAME }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}


export const cleanCharacter = () => {
    return { type:CLEAN_CHARACTER }
}