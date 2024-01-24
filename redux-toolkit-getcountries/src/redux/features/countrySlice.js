import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const name = 'country';
const initialState = {
    loading: true,
    country: []
}

const getCounties = createAsyncThunk('getCountries', async () => {
    const {data} = await axios.get("https://restcountries.com/v3.1/all");
    return data;
})

const countrySlice =  createSlice({
    name,
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        reset: (state) => {
            state.country = initialState.country;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCounties.fulfilled, (state, action) => {
            state.country = action.payload;
        })
    }
})

export {getCounties};
export const {setLoading, reset} = countrySlice.actions;
export default countrySlice.reducer;