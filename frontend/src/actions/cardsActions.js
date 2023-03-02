import {create, remove, setSuccess, setStatus, update} from "../feutures/cardsSlice";
import ApiService from "../services/ApiService";

export const fetchCards = () => async dispatch => {
    try {
        ApiService.getAll()
            .then((response) =>
                dispatch(setSuccess(response.data))
            );
    } catch (e) {
        return console.error(e.message);
    }
}

export const updateCard = (updated) => async dispatch => {
    try {
        ApiService.update(updated)
            .then((response) =>
                dispatch(update(response.data))
            );
    } catch (e) {
        return console.error(e.message);
    }
}

export const createCard = (created) => async dispatch => {
    try {
        ApiService.create(created)
            .then((response) => {
                    created.id = response.data.id;
                    dispatch(create(response.data))
                }
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
            .then(() => dispatch(remove({id, status})));
    } catch (e) {
        return console.error(e.message);
    }
}

export const removeFromColumn = (id, status) => async dispatch => {
    dispatch(remove({id, status}));
}