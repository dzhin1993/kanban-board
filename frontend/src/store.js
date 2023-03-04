import {configureStore} from '@reduxjs/toolkit'

import cardsReducer from "./feutures/cardsSlice";
import updateModalReducer from "./feutures/modalFormSlice";


export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        modal: updateModalReducer,
    },
    devTools: true
})

export default store;
