import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    contacts : [],
    error : null,
    status : 'idle'
}
const baseURL = 'https://dummyjson.com/users'

export const getContact = createAsyncThunk('contact/getContact', async () => {
    const res = await axios.get(`${baseURL}?limit=20&skip=0`)
    return res.data.users
})

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts = state.filter((el) => el.id !== action.payload)
        }
    },
    extraReducers : builder => {
        builder
            .addCase(getContact.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getContact.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.contacts = action.payload
            })
            .addCase(getContact.rejected, (state, action) => {
                state.status = 'failed'
                state.contacts = []
                state.error = action.error
            })
    }
})

export const {addContact, deleteContact} = contactSlice.actions

export default contactSlice.reducer

export const selectAllContact = (state) => state.contacts
export const selectStatusContact = (state) => state.status
export const selectErrorContact = (state) => state.error