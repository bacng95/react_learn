import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'couterSlice',
    initialState: {
        couter: 0
    },
    reducers: {
        increment: (state) => {
            state.couter = state.couter + 1
        },
        decrement: (state) => {
            state.couter = state.couter - 1
        }
    }
})


export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer