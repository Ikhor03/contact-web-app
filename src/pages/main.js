import React from 'react'
import Header from '../component/Header'
import ContactList from '../component/ContactList'
import { Divider } from '@chakra-ui/react'

const Main = () => {
    // TODO: 
    // edit contact
    // create contact
    // delete contact
    return (
        <>
            <Header />
            <Divider />
            <ContactList />
        </>
    )
}

export default Main