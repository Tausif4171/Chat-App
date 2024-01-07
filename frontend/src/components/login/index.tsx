import React from 'react'
import { Box, Button, Container, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

function Login() {
    return (
        <div>
            <FormControl isRequired mb={'24px'}>
                <Box mb={'12px'}>
                    <FormLabel>Email Address</FormLabel>
                    <Input placeholder='Enter name' bg={'white'} focusBorderColor='none' outline={'none'} />
                </Box>

                <Box mb={'12px'}>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder='Enter password' bg={'white'} />
                </Box>

                <Box mb={'24px'}>
                    <Button bg='black' width={'107px'} height={'44px'} textAlign={'center'} lineHeight={'20px'} rounded={'12px'} textColor={'white'}>Login</Button>
                </Box>
            </FormControl>
        </div>
    )
}

export default Login