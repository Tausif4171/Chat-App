import { Box, Button, Container, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../login'
import SignUp from '../signup'

function HomePage() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                <Container maxW='2xl' bg='#F0F0F8' centerContent>
                    <Box padding='4' color='black' maxW='md'>
                        <Text fontSize='32px' fontWeight={600} fontFamily={'Work sans'}>Talkative</Text>
                    </Box>

                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList display={'flex'} justifyContent={'center'} >
                            <Tab>Login</Tab>
                            <Tab>Sing Up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel width={'500px'}>

                                <Login />

                            </TabPanel>
                            <TabPanel width={'500px'}>

                                <SignUp />

                            </TabPanel>
                        </TabPanels>
                    </Tabs>


                </Container>
            </div >
        </>
    )
}

export default HomePage