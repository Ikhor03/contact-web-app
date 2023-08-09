import React from 'react';
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './pages/main';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid p={2} gap={5}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/add' element={<AddContact/>} />
            <Route path='/edit' element={<EditContact/>} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
