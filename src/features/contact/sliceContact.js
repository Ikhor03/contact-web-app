import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    contacts: [],
    updatedData: [],
    error: null,
    status: 'idle'
}
const baseURL = 'https://dummyjson.com/users'

export const getContact = createAsyncThunk('contact/getContact', async () => {
    const res = await axios.get(`${baseURL}`)
    return res.data.users
})

export const getContactById = createAsyncThunk('contact/getContactById', async (id) => {
    const res = await axios.get(`${baseURL}/${id}`)
    return res.data
})

export const updateContact = createAsyncThunk('contact/updateContact', async ({ id, input }) => {
    const res = await axios.put(`${baseURL}/${id}`, input)
    return res.data
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
        },
        setStatus: (state, action) => {
            state.status = 'idle'
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getContact.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getContact.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const updatedIds = state.updatedData.map(el => {
                    return el.id
                })
                const uniqueData = action.payload.filter((el) => {
                    const check = updatedIds.includes(el.id)
                    return !check
                })
                state.contacts = [...state.updatedData, ...uniqueData]
            })
            .addCase(getContact.rejected, (state, action) => {
                state.status = 'failed'
                state.contacts = []
                state.error = action.error
            })
            // case get contact by id
            .addCase(getContactById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.contacts = [action.payload]
            })
            .addCase(getContactById.pending, (state, action) => {
                state.status = 'loading'
                state.contacts = action.payload
            })
            .addCase(getContactById.rejected, (state, action) => {
                state.status = 'failed'
                state.contacts = []
                state.error = action.error
            })
            // Case when fetch update contact
            .addCase(updateContact.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const uniqueData = state.updatedData.filter((el) => {
                    return el.id !== action.payload.id
                })
                uniqueData.push(action.payload)
                state.updatedData = uniqueData
            })
            .addCase(updateContact.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

export const { addContact, deleteContact, setStatus } = contactSlice.actions

export default contactSlice.reducer

export const selectAllContact = (state) => state.contacts
export const selectUpdateContact = (state) => state.updatedData
export const selectStatusContact = (state) => state.status
export const selectErrorContact = (state) => state.error