import {createSlice} from '@reduxjs/toolkit'

export const createModalFormSlice = createSlice({
    name: 'createModal',
    initialState: {
        show: false,
        currentColumn: null,
    },
    reducers: {
        open: (state, action) => {
            state.show = true;
            state.currentColumn = action.payload;
        },
        close: (state) => {
            state.show = false;
            state.currentColumn = null;
        },
    }
});

export const {
    open,
    close
} = createModalFormSlice.actions

export default createModalFormSlice.reducer