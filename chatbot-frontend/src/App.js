import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSendQuery = () => {
    fetch(`http://localhost:5000/response?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        setResponse(data.response);
      })
      .catch(error => {
        console.error('Error:', error);
        setResponse('Error occurred. Please try again.');
      });
  };

  return (
    <div className="App">
      <h1>Chatbot Frontend (React)</h1>
      <textarea
        value={query}
        onChange={handleQueryChange}
        placeholder="Enter your query"
      ></textarea><br />
      <button onClick={handleSendQuery}>Send Query</button><br />
      <div className="response">
        <strong>Response:</strong> {response}
      </div>
    </div>
  );
}

export default App;
