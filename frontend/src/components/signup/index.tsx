import React, { useState } from 'react'
import { Box, Button, Container, FormControl, FormLabel, HStack, Input, InputGroup, InputRightElement, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
                    <Input placeholder='Enter name' bg='white'
                        borderWidth='2px'
                        borderColor='white'
                        _hover={{ borderColor: 'black' }}
                        _focus={{
                            borderColor: 'black',
                            boxShadow: 'none',  // Add this to remove any box shadow on focus
                            outline: 'none !important',
                        }} onChange={(e) => setName(e.target.value)} />
                </Box>
                <Box mb={'12px'}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter email' bg='white'
                        borderWidth='2px'
                        borderColor='white'
                        _hover={{ borderColor: 'black' }}
                        _focus={{
                            borderColor: 'black',
                            boxShadow: 'none',  // Add this to remove any box shadow on focus
                            outline: 'none !important',
                        }} focusBorderColor='none' outline={'none'} onChange={(e) => setEmail(e.target.value)} />
                </Box>

                <Box mb={'12px'}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input placeholder='Enter password' type={showPassword ? 'text' : 'password'} bg='white'
                            borderWidth='2px'
                            borderColor='white'
                            _hover={{ borderColor: 'black' }}
                            _focus={{
                                borderColor: 'black',
                                boxShadow: 'none',  // Add this to remove any box shadow on focus
                                outline: 'none !important',
                            }} onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement paddingRight={'24px'} cursor={'pointer'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</InputRightElement>
                    </InputGroup>

                </Box>
                <Box mb={'12px'}>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input placeholder='Enter confirm password' type={showConfirmPassword ? 'text' : 'password'} bg='white'
                            borderWidth='2px'
                            borderColor='white'
                            _hover={{ borderColor: 'black' }}
                            _focus={{
                                borderColor: 'black',
                                boxShadow: 'none',  // Add this to remove any box shadow on focus
                                outline: 'none !important',
                            }} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <InputRightElement paddingRight={'24px'} cursor={'pointer'} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? 'Hide' : 'Show'}</InputRightElement>
                    </InputGroup>
                </Box>

                <Box mb={'12px'}>
                    <FormLabel>Upload your picture</FormLabel>
                    <Input type='file' p='4px' bg='white'
                        borderWidth='2px'
                        borderColor='white'
                        _hover={{ borderColor: 'black' }}
                        _focus={{
                            borderColor: 'black',
                            boxShadow: 'none',  // Add this to remove any box shadow on focus
                            outline: 'none !important',
                        }} onChange={(e: any) => handleProfilePic(e.target.files[0])} />
                </Box>

            </FormControl>
            <div>
                <Box mb={'12px'}>
                    <Button bg='black' _hover={{ background: "white", color: 'black' }} width={'107px'} height={'44px'} textAlign={'center'} lineHeight={'20px'} rounded={'12px'} textColor={'white'} onClick={handleSignUp}>Sign Up</Button>
                </Box>
            </div>
        </VStack>
    )
}

export default SignUp