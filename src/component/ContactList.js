import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const ContactList = () => {

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='whatsapp'>
                <TableCaption>
                    “We are like islands in the sea, separate on the surface but connected in the deep.” 
                    <br/>
                    - William James
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th isNumeric>Phone</Th>
                        <Th>Email</Th>
                        <Th>Address</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Jhon</Td>
                        <Td isNumeric>6287498574</Td>
                        <Td>jhon@mail.com</Td>
                        <Td>Rawabelong</Td>
                        <Td>DELETE | EDIT</Td>
                    </Tr>
                    <Tr>
                        <Td>Jhon</Td>
                        <Td isNumeric>6287498574</Td>
                        <Td>jhon@mail.com</Td>
                        <Td>Rawabelong</Td>
                        <Td>DELETE | EDIT</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Name</Th>
                        <Th isNumeric>Phone</Th>
                        <Th>Email</Th>
                        <Th>Address</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default ContactList