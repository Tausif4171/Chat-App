import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ChatPage() {
    const [chats, setChats] = useState<any>([])
    console.log({ chats })
    const fetchChats = async () => {
        try {
            const result = await axios.get('/api/chats');
            setChats(result.data);  // Assuming the data is in the 'data' property of the response
        } catch (error: any) {
            console.error('Error fetching chats:', error.message);
        }
    }


    useEffect(() => {
        fetchChats()
    }, [])
    return (
        <div>ChatPage</div>
    )
}

export default ChatPage