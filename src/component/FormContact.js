import { Button, Center, Divider, FormControl, FormErrorMessage, Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaAddressBook, FaAddressCard, FaMailBulk, FaPhone } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllContact } from '../features/contact/sliceContact'

const FormContact = ({ title }) => {
    const contacts = useSelector(selectAllContact)
    console.log(contacts)
    const [input, setInput] = useState({
        firstName: "",
        lastName : "",
        phoneNumber: "",
        email: "",
        address: ""
    })


    const handleInputChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setInput({ ...input, [key]: value })
    }
    const handleError = (isError) => isError && (
        <FormErrorMessage>Email is required.</FormErrorMessage>
    )

    const isError = input === ''
    const handleSubmit = () => {
        handleError(isError)
        console.log(input)
        alert("submitted")
    }

    return (
        <>
            <Center>
                <FormControl as={"form"} isInvalid={isError} maxW={"480px"}>
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
                        {handleError(isError)}

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
                                name='phoneNumber'
                                focusBorderColor='whatsapp'
                                variant='flushed'
                                onChange={handleInputChange}
                                value={input.phoneNumber}
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
                                value={input.address}
                                placeholder='Address'
                            />
                        </InputGroup>

                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            colorScheme='whatsapp'
                        >
                            SAVE
                        </Button>
                        <Button colorScheme='whatsapp' >
                            <Link to='/' >
                                CENCEL
                            </Link>
                        </Button>

                    </Stack>
                </FormControl>
            </Center>
        </>
    )
}

export default FormContact