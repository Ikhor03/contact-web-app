import { Button, Center, Divider, FormControl, FormErrorMessage, Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaAddressBook, FaAddressCard, FaMailBulk, FaPhone } from 'react-icons/fa'

const FormContact = ({title}) => {
    const [input, setInput] = useState({
        fullname: "",
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
                                name='fullname'
                                focusBorderColor='whatsapp'
                                variant='flushed'
                                onChange={handleInputChange}
                                value={input.fullname}
                                placeholder='Fullname'
                            />
                        </InputGroup>
                        {handleError(isError)}

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
                            SIMPAN
                        </Button>

                    </Stack>
                </FormControl>
            </Center>
        </>
    )
}

export default FormContact