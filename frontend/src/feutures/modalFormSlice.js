import {createSlice} from "@reduxjs/toolkit";

const emptyCard = {title: "", description: ""}

export const modalFormSlice = createSlice({
    name: 'modal',
    initialState: {
        show: false,
        currentCard: emptyCard,
    },
    reducers: {
        open: (state, action) => {
            state.show = true;
            state.currentCard = action.payload;
        },
        close: (state) => {
            state.show = false;
            state.currentCard = emptyCard;
        },
        updateProperty: (state, action) => {
            const {name, value} = action.payload;
            const {currentCard} = state;
            currentCard[name] = value;
        },
    }
});

export const {
    open,
    close,
    updateProperty
} = modalFormSlice.actions

export default modalFormSlice.reducer