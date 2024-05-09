// App.js

import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const userMessage = { sender: 'user', message: inputText };
      setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage]);
      setInputText('');

      // Simulating Chat GPT response
      setTimeout(() => {
        const botResponse = { sender: 'bot', message: 'Esta é uma resposta do Chat GPT.' };
        setChatHistory((prevChatHistory) => [...prevChatHistory, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="page-title">Aprendizado de Idiomas</h1>
        <p className="page-description">Pratique e melhore suas habilidades em idiomas estrangeiros de forma interativa!</p>
      </header>
      <div className="container">
        <div className="chat-container">
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`chat-message ${chat.sender === 'user' ? 'user' : 'bot'}`}
              >
                <span className="message-sender">
                  {chat.sender === 'user' ? 'Você:' : 'ChatGPT:'}
                </span>
                {chat.message}
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Digite sua mensagem..."
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-item">
            <i className="fas fa-info-circle"></i>
            <span>Sobre</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-question"></i>
            <span>Ajuda</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-comment-alt"></i>
            <span>Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
