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
        changeInput: (state) => {
            state.show = false;
            state.currentCard = emptyCard;
        },
    }
});

export const {
    open,
    close,
} = modalFormSlice.actions

export default modalFormSlice.reducer