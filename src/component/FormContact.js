import {
    Button,
    Center,
    Divider,
    FormControl,
    FormErrorMessage,
    Heading,
    Input, 
    InputGroup, 
    InputLeftElement, 
    Stack
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAddressBook, FaAddressCard, FaMailBulk, FaPhone } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    selectAllContact,
    setStatus,
} from '../features/contact/sliceContact'

const FormContact = ({ title, isNew, handleSubmit }) => {
    const contacts = useSelector(selectAllContact)
    const dispatch = useDispatch()
    
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: ""
    })

    useEffect(() => {
        // Set input if contacts is contain only one item (thats mean contact by id)
        // and the form is not in "add contact" page / isNew
        if (contacts?.length === 1 && !isNew) {
            setInput({
                firstName: contacts[0]?.firstName,
                lastName: contacts[0]?.lastName,
                phone: contacts[0]?.phone,
                email: contacts[0]?.email,
                address: { city: contacts[0]?.address.city }
            })
        }
    }, [dispatch, contacts])

    useEffect(() => {
        dispatch(setStatus())
    }, [])

    const handleInputChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        if (key === 'address') {
            setInput({...input, address: {city : value}})
        } else {
            setInput({ ...input, [key]: value })
        }
    }

    // TODO: VALIDATE form using formErroMassage
    const handleError = (isError) => isError && (
        <FormErrorMessage> is required.</FormErrorMessage>
    )
    const isError = input === ''

    return (
        <>
            <Center>
                <FormControl as={"form"} maxW={"480px"} isInvalid={isError}>
                    <Heading>{title}</Heading>
                    <Divider mb={5} />
                    <Stack spacing={3}>

                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaAddressBook color='gray.300' />
                            </InputLeftElement>
                            <Input
                                name='firstName'
                                focusBorderColor='whatsapp'
                                variant='flushed'
                                onChange={handleInputChange}
                                value={input.firstName}
                                placeholder='First Name'
                            />
                        </InputGroup>
                        {/* {handleError(isError)} */}

                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaAddressBook color='gray.300' />
                            </InputLeftElement>
                            <Input
                                name='lastName'
                                focusBorderColor='whatsapp'
                                variant='flushed'
                                onChange={handleInputChange}
                                value={input.lastName}
                                placeholder='Last Name'
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaPhone color='gray.300' />
                            </InputLeftElement>
                            <Input
                                name='phone'
                                focusBorderColor='whatsapp'
                                variant='flushed'
                                onChange={handleInputChange}
                                value={input.phone}
                                placeholder='Phone Number'
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaMailBulk color='gray.300' />
                            </InputLeftElement>
                            <Input
                                name='email'
                                focusBorderColor='whatsapp'
                                variant='flushed'
                                onChange={handleInputChange}
                                value={input.email}
                                placeholder='Email Address'
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaAddressCard color='gray.300' />
                            </InputLeftElement>
                            <Input
                                name='address'
                                focusBorderColor='whatsapp'
                                variant='flushed'
                                onChange={handleInputChange}
                                value={input.address.city}
                                placeholder='Address'
                            />
                        </InputGroup>

                        <Button
                            onClick={() => handleSubmit(input)}
                            colorScheme='whatsapp'
                        >
                            SAVE
                        </Button>
                        <Button colorScheme='whatsapp'>
                            <Link to='/' >
                                BACK
                            </Link>
                        </Button>

                    </Stack>
                </FormControl>
            </Center>
        </>
    )
}

export default FormContact