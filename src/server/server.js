const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.post('/api/chatgpt', async (req, res) => {
  try {
    const { messages } = req.body;

    // Use dynamic import for 'node-fetch'
    const { default: fetch } = await import('node-fetch');

    const openAIResponse = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        messages: messages,
        max_tokens: 150,
        model: "gpt-3.5-turbo-instruct",
        stop: "\n"
      })
    });

    const openAIJson = await openAIResponse.json();
    console.log("Server received from OpenAI:", openAIJson);
    res.json(openAIJson);
  } catch (error) {
    console.error('Error handling /api/chatgpt:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
