import {createSlice} from "@reduxjs/toolkit";

const emptyCard = {title: "", description: ""}

export const updateModalFormSlice = createSlice({
    name: 'updateModal',
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
    }
});

export const {
    open,
    close,
} = updateModalFormSlice.actions

export default updateModalFormSlice.reducer