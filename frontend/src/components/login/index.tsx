import React, { useState } from 'react'
import { Box, Button, VStack, Container, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleLogin = () => { }
    return (
        <VStack spacing='24px'>
            <FormControl isRequired mb={'24px'}>
                <Box mb={'12px'}>
                    <FormLabel>Email Address</FormLabel>
                    <Input placeholder='Enter email' bg={'white'} focusBorderColor='none' outline={'none'} onChange={(e) => setEmail(e.target.value)} />
                </Box>

                <Box mb={'12px'}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter password' bg={'white'} onChange={(e) => setName(e.target.value)} />
                </Box>
            </FormControl>

            <Box mb={'24px'}>
                <Button bg='black' width={'107px'} height={'44px'} textAlign={'center'} lineHeight={'20px'} rounded={'12px'} textColor={'white'} onClick={handleLogin}>Login</Button>
            </Box>
        </VStack>
    )
}

export default Login