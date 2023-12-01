import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    educations: []
};

export const getEducations = createAsyncThunk('educations', async () => {
    const response = await fetch('http://localhost:1337/api/educations?populate=*');
    const data = await response.json();
    return data;
})

const educationSlice = createSlice({
    name: "educations",
    initialState,
    reducers: {},
    extraReducers : (builder) => {  
        builder.addCase(getEducations.fulfilled, (state, action) => {
            state.educations = action.payload;
        })
    }
});



export default educationSlice.reducer;