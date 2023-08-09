import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

const Header = () => {
  return (
      <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
              <Heading size='md'>Contact App</Heading>
          </Box>

          <Spacer />

          <ButtonGroup gap='2'>
              <Button colorScheme='whatsapp'>Add Contact +</Button>
              <ColorModeSwitcher justifySelf="flex-end" />
          </ButtonGroup>
      </Flex>
  )
}

export default Header