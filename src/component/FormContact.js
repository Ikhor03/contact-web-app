import { Button, Center, Divider, FormControl, FormErrorMessage, Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAddressBook, FaAddressCard, FaMailBulk, FaPhone } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getContactById, selectAllContact, selectStatusContact, setStatus } from '../features/contact/sliceContact'

const FormContact = ({ title , isNew}) => {
    const contacts = useSelector(selectAllContact)
    const statusContact = useSelector(selectStatusContact)
    const dispatch = useDispatch()
    const {id} = useParams()
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: ""
    })

    useEffect(() => {
        if (statusContact === 'idle' && id){
            dispatch(getContactById(id))
        }
        if (statusContact === 'succeeded'){
            setInput({
                firstName: contacts[0]?.firstName,
                lastName: contacts[0]?.lastName,
                phone: contacts[0]?.phone,
                email: contacts[0]?.email,
                address: contacts[0]?.address.city
            })
        }
        
        if (isNew) {
            setInput({})
            dispatch(setStatus())
        }
    }, [dispatch, id, statusContact])


    const handleInputChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setInput({ ...input, [key]: value })
    }
    const handleError = (isError) => isError && (
        <FormErrorMessage> is required.</FormErrorMessage>
    )

    const isError = input === ''
    const handleSubmit = (e) => {
        e.preventDefault()
        handleError(isError)
        console.log(input)
        alert("submitted")
    }

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
                        <Button colorScheme='whatsapp' onClick={() => dispatch(setStatus())}>
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