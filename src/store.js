import { configureStore } from '@reduxjs/toolkit'
import sliceContact from './features/contact/sliceContact'

const store = configureStore({
    reducer: sliceContact
})

export default store