import React, { useState } from 'react'
import { Box, Button, Container, FormControl, FormLabel, HStack, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePic, setProfilePic] = useState(null)

    const handleSignUp = () => { }
    const handleProfilePic = (pic: any) => { }
    return (
        <VStack spacing='24px'>
            <FormControl isRequired mb={'24px'}>
                <Box mb={'12px'}>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Enter name' bg={'white'} focusBorderColor='none' outline={'none'} onChange={(e) => setName(e.target.value)} />
                </Box>
                <Box mb={'12px'}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter email' bg={'white'} focusBorderColor='none' outline={'none'} onChange={(e) => setEmail(e.target.value)} />
                </Box>

                <Box mb={'12px'}>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder='Enter password' bg={'white'} onChange={(e) => setPassword(e.target.value)} />
                </Box>
                <Box mb={'12px'}>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input placeholder='Enter confirm password' bg={'white'} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Box>

                <Box mb={'12px'}>
                    <FormLabel>Upload your picture</FormLabel>
                    <Input type='file' p='4px' bg={'white'} onChange={(e: any) => handleProfilePic(e.target.files[0])} />
                </Box>

            </FormControl>
            <div>
                <Box mb={'12px'}>
                    <Button bg='black' width={'107px'} height={'44px'} textAlign={'center'} lineHeight={'20px'} rounded={'12px'} textColor={'white'} onClick={handleSignUp}>Sign Up</Button>
                </Box>
            </div>
        </VStack>
    )
}

export default SignUp