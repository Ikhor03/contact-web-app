import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
              <Heading size='md'>Your Contact</Heading>
          </Box>

          <Spacer />

          <ButtonGroup gap='2'>
          <Link to='/add'>
              <Button 
                colorScheme='whatsapp'>
                NEW
            </Button>
          </Link>
              <ColorModeSwitcher justifySelf="flex-end" />
          </ButtonGroup>
      </Flex>
  )
}

export default Header