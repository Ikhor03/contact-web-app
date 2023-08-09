import React from 'react'
import Header from '../component/Header'
import ContactList from '../component/ContactList'
import { Divider } from '@chakra-ui/react'

const Main = () => {
    return (
        <>
            <Header />
            <Divider />
            <ContactList />
        </>
    )
}

export default Main