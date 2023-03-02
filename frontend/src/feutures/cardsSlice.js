import { createSlice } from '@reduxjs/toolkit'

export const cardItemsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        setSuccess: (state, action) => {
            state.cards = action.payload;
        },
        create: (state, action) => {
            const {cards} = state;
            const {status} = action.payload;
            cards.hasOwnProperty(status)
                ? cards[status].push(action.payload)
                : cards[status] = [action.payload]
        },
        update: (state, action) => {
            const {cards} = state;
            const {id, status} = action.payload;
            cards[status] = cards[status].map(card =>
                card.id === id ? action.payload : card
            );
        },
        remove: (state, action) => {
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

export const {
    setSuccess,
    create,
    update,
    remove,
    setStatus
} = cardItemsSlice.actions

export default cardItemsSlice.reducer