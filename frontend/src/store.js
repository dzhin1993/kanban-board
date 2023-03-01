import {configureStore} from '@reduxjs/toolkit'

import cardsReducer from "./feutures/cardItemSlice";


export const store = configureStore({
    reducer: {
        cards: cardsReducer
    },
    devTools: true
})

export default store;
