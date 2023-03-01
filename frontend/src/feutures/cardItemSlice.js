import { createSlice } from '@reduxjs/toolkit'

export const cardItemsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        cardsSuccess: (state, action) => {
            state.cards = action.payload;
        },
    },
});

export const { cardsSuccess } = cardItemsSlice.actions

export default cardItemsSlice.reducer