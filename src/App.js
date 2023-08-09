import React from 'react';
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import Main from './pages/main';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid p={2} gap={5}>
        <Main />
        <AddContact />
        <EditContact />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
