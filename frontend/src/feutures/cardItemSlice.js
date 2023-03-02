import { createSlice } from '@reduxjs/toolkit'

export const cardItemsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        setCardsSuccess: (state, action) => {
            state.cards = action.payload;
        },
        removeCard: (state, action) => {
            const {cards} = state;
            const {id, status} = action.payload;
            cards[status] = cards[status].filter(card => card.id !== id);
        },
        setStatus: (state, action) => {
            const {cards} = state;
            const {status} = action.payload;
            cards.hasOwnProperty(status)
                ? cards[status].push(action.payload)
                : cards[status] = [action.payload]
        }

    },
});

export const { setCardsSuccess, removeCard, setStatus } = cardItemsSlice.actions

export default cardItemsSlice.reducer