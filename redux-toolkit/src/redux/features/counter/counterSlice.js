import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        x2: (state, action) => {
            state.value *= action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    },
})

export const {increment, decrement, x2, reset} = counterSlice.actions;

export default counterSlice.reducer;