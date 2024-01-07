import React, { useState } from 'react'
import { Box, Button, VStack, Container, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, InputGroup, InputRightElement } from '@chakra-ui/react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShow, setIsShow] = useState(false)

    const handleLogin = () => { }
    return (
        <VStack spacing='24px'>
            <FormControl isRequired mb={'24px'}>
                <Box mb={'12px'}>
                    <FormLabel>Email Address</FormLabel>
                    <Input placeholder='Enter email ' bg={'white'} focusBorderColor='none' outline={'none'} onChange={(e) => setEmail(e.target.value)} />
                </Box>

                <Box mb={'12px'}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input placeholder='Enter password' type={isShow ? 'text' : 'password'} bg={'white'} onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement paddingRight={'24px'} cursor={'pointer'} onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</InputRightElement>
                    </InputGroup>
                </Box>
            </FormControl>

            <Box mb={'24px'}>
                <Button bg='black' width={'107px'} height={'44px'} textAlign={'center'} lineHeight={'20px'} rounded={'12px'} textColor={'white'} onClick={handleLogin}>Login</Button>
            </Box>
        </VStack>
    )
}

export default Login