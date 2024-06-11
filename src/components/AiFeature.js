import React, { useState, useEffect } from 'react';

const AiFeature = () => {
  const [messages, setMessages] = useState([
    
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": "Hello, how are you?" }
    
    
  ]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    // Add user message to the messages array
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }), // Send the entire messages array
      });

      const data = await res.json();
      const aiResponse = data.choices[0].message.content;

      // Add AI response to the messages array
      const assistantMessage = { role: 'assistant', content: aiResponse };
      setMessages([...messages, assistantMessage]);

      setInput(''); // Clear the input field
      console.log("OpenAI Response:", aiResponse);
    } catch (error) {
      console.error('There was an error submitting the command:', error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the message container when messages change
    const messageContainer = document.getElementById('message-container');
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="container">
      <h1>Welcome to The Networks World</h1>
      <div className="message-container" id="message-container">
        {messages.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your message"
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default AiFeature;
