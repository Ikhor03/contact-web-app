import { Box, Center, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getContact, selectAllContact, selectStatusContact, setStatus } from '../features/contact/sliceContact'

const ContactList = () => {
    const contacts = useSelector(selectAllContact)
    const dispatch = useDispatch()
    const contactStatus = useSelector(selectStatusContact)

    useEffect(() => {
        if (contactStatus === 'idle') {
            dispatch(getContact())
        }
    }, [dispatch, contactStatus])

    return (
        <>
            {
                contactStatus === 'loading' &&
                <Box bg='gray.100' opacity='10'>
                    <Center>
                        <Spinner
                            thickness='7px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='green.500'
                            size='xl'
                        />
                    </Center>
                </Box>
            }
            <TableContainer>
                <Table variant='striped' colorScheme='whatsapp'>
                    <TableCaption>
                        “We are like islands in the sea, separate on the surface but connected in the deep.”
                        <br />
                        - William James
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Phone</Th>
                            <Th>Email</Th>
                            <Th>Address</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            contacts.map(el => {
                                const fullName = `${el.firstName} ${el.lastName}`
                                return (
                                    <Tr key={el.id}>
                                        <Td>{fullName}</Td>
                                        <Td>{el.phone}</Td>
                                        <Td>{el.email}</Td>
                                        <Td>{el.address.city}</Td>
                                        <Td >
                                            <Box display='flex' gap={3}>
                                                <Link to={`/edit/${el.id}`} onClick={() => dispatch(setStatus())} >
                                                    <FaRegEdit />
                                                </Link>
                                                <FaTrashAlt />
                                            </Box>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Phone</Th>
                            <Th>Email</Th>
                            <Th>Address</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}

export default ContactList