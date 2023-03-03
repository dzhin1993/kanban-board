import {configureStore} from '@reduxjs/toolkit'

import cardsReducer from "./feutures/cardsSlice";
import createModalReducer from "./feutures/createModalFormSlice";
import updateModalReducer from "./feutures/updateModalFormSlice";


export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        createModal: createModalReducer,
        updateModal: updateModalReducer,
    },
    devTools: true
})

export default store;
