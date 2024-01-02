import { Box, Container } from '@chakra-ui/react'
import React from 'react'

function HomePage() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                <Container maxW='2xl' bg='blue.600' centerContent>
                    <Box padding='4' color='white' maxW='md'>
                        Talkative
                    </Box>
                </Container>
            </div>
        </>
    )
}

export default HomePage