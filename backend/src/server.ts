import express from 'express';
import { chats } from './chats_data/data'; // Note the .mjs extension

const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.listen(5000, () => console.log('Server is running on port 5000'));
