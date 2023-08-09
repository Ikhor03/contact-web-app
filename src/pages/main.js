import React from 'react'
import Header from '../component/Header'
import ContactList from '../component/ContactList'
import { Grid } from '@chakra-ui/react'

const Main = () => {
  return (
      <Grid p={2}>
          <Header />
          <ContactList />
      </Grid>
  )
}

export default Main