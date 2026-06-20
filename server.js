const express = require('express');
const app = express();
app.use(express.json());

let messages = [];

app.post('/share', (req, res) => {
    const { name, income, value, author } = req.body;
    messages.push({ name, income, value, author, time: Date.now() });
    if (messages.length > 500) messages.shift();
    res.json({ success: true, total: messages.length });
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('✅ Running'));
