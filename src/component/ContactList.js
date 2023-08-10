import { Alert, AlertIcon, Box, Button, Center, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact, getContact, selectAlert, selectAllContact, selectStatusContact, setAlert } from '../features/contact/sliceContact'

const ContactList = () => {
    const contacts = useSelector(selectAllContact)
    const dispatch = useDispatch()
    const contactStatus = useSelector(selectStatusContact)
    const alert = useSelector(selectAlert)

    useEffect(() => {
        if (contactStatus === 'idle') {
            dispatch(getContact())
        }
        console.log(contactStatus)
    }, [dispatch, contactStatus])

    // conditional rendering for alert
    let alertComponent = ''
    if (alert !== 'none') {
        alertComponent = (
            <Alert 
                status={alert === 'deleted' ? 'error' : 'success'} 
                variant='subtle'
                position='fixed'
                top='10'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
            >
                <AlertIcon />
                {
                    alert === 'deleted' ? 
                    'Contact deleted!' : 
                    'Contact added to the server. Fire on!'
                }
                
            </Alert>
        )
        
    }
    setTimeout(() => {
        dispatch(setAlert('none'))
    }, "4000");

    // Handling delete button
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
        dispatch(setAlert('deleted'))
    }

    return (
        <>
            {alertComponent}
            {
                contactStatus === 'loading' || contactStatus === 'idle' &&
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
                                const address = el.address.city || el.address
                                return (
                                    <Tr key={el.id}>
                                        <Td>{fullName}</Td>
                                        <Td>{el.phone}</Td>
                                        <Td>{el.email}</Td>
                                        <Td>{address}</Td>
                                        <Td >
                                            <Box display='flex' gap={3}>
                                                <Link to={`/edit/${el.id}`} >
                                                    <Button>
                                                        <FaRegEdit />
                                                    </Button>
                                                </Link>

                                                <Button>
                                                    <FaTrashAlt onClick={() => handleDelete(el.id)} />
                                                </Button>
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