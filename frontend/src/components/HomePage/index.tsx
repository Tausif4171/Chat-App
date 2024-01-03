import { Box, Button, Container, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

function HomePage() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                <Container maxW='2xl' bg='#F0F0F8' centerContent>
                    <Box padding='4' color='black' maxW='md'>
                        <Text fontSize='32px' fontWeight={600} fontFamily={'Work sans'}>Talkative</Text>
                    </Box>

                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList>
                            <Tab>Login</Tab>
                            <Tab>Sing Up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>

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

                            </TabPanel>
                            <TabPanel>

                                <FormControl isRequired mb={'24px'}>
                                    <Box mb={'12px'}>
                                        <FormLabel>Name</FormLabel>
                                        <Input placeholder='Enter name' bg={'white'} focusBorderColor='none' outline={'none'} />
                                    </Box>
                                    <Box mb={'12px'}>
                                        <FormLabel>Email</FormLabel>
                                        <Input placeholder='Enter email' bg={'white'} focusBorderColor='none' outline={'none'} />
                                    </Box>

                                    <Box mb={'12px'}>
                                        <FormLabel>Password</FormLabel>
                                        <Input placeholder='Enter password' bg={'white'} />
                                    </Box>
                                    <Box mb={'12px'}>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <Input placeholder='Enter confirm password' bg={'white'} />
                                    </Box>

                                    <Box mb={'12px'}>
                                        <Button bg='black' width={'107px'} height={'44px'} textAlign={'center'} lineHeight={'20px'} rounded={'12px'} textColor={'white'}>Button</Button>
                                    </Box>
                                </FormControl>

                            </TabPanel>
                        </TabPanels>
                    </Tabs>


                </Container>
            </div >
        </>
    )
}

export default HomePage