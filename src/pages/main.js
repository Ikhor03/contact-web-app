import React, { useEffect } from 'react'
import Header from '../component/Header'
import ContactList from '../component/ContactList'
import { Divider } from '@chakra-ui/react'
import { setStatus } from '../features/contact/sliceContact'
import { useDispatch } from 'react-redux'

const Main = () => {
    // TODO: 
    // edit contact
    // create contact
    // delete contact
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setStatus())
    }, [])
    return (
        <>
            <Header />
            <Divider />
            <ContactList />
        </>
    )
}

export default Main