import {removeCard, setCardsSuccess, setStatus} from "../feutures/cardItemSlice";
import ApiService from "../services/ApiService";

export const fetchCards = () => async dispatch => {
    try {
        ApiService.getAll()
            .then((response) =>
                dispatch(setCardsSuccess(response.data))
            );
    } catch (e) {
        return console.error(e.message);
    }
}

export const updateStatus = (id, status) => async dispatch => {
    try {
        ApiService.updateStatus(id, status)
            .then((response) =>
                dispatch(setStatus(response.data))
            );
    } catch (e) {
        return console.error(e.message);
    }
}

export const deleteCard = (id, status) => async dispatch => {
    try {
        ApiService.remove(id)
            .then(() => dispatch(removeCard({id, status})));
    } catch (e) {
        return console.error(e.message);
    }
}

export const removeFromColumn = (id, status) => async dispatch => {
    dispatch(removeCard({id, status}));
}