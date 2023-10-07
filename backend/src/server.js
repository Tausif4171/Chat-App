const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./chats_data/data');


const app = express();
dotenv.config()
app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req, res) => {
    const singleUserChat = chats.find((chat) => chat._id === req.params.id)
    res.send(singleUserChat)
})
const PORT = process.env.PORT || 5050
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
