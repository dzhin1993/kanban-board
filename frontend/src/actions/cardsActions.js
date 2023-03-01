import {cardsSuccess} from "../feutures/cardItemSlice";
import ApiService from "../services/ApiService";

export const fetchCards = () => async dispatch => {
    try {
        ApiService.getAll()
            .then((response) =>
                dispatch(cardsSuccess(response.data))
            )
    } catch (e) {
        return console.error(e.message);
    }
}