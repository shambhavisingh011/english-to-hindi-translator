import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishText, setEnglishText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [translated, setTranslated] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (imageFile) formData.append('image', imageFile);
    else formData.append('text', englishText);

    const response = await fetch('http://localhost:5000/translate', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setTranslated(data.translated || data.error);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window && translated) {
      const utterance = new SpeechSynthesisUtterance(translated);
      utterance.lang = 'hi-IN'; // Hindi
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="app-container">
      <h2 className="title">English to Hindi Translator</h2>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          placeholder="Paste English text..."
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
        />

        <input
          type="file"
          className="file-input"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <button type="submit" className="submit-btn">Translate</button>
      </form>

      <h3 className="output-heading">Hindi Translation:</h3>
      <div className="output-box">
        {translated}
      </div>

      {translated && (
        <div className="button-group">
          <button className="speak-btn" onClick={handleSpeak}>🔊 Read Aloud</button>
          <button className="stop-btn" onClick={handleStop}>🛑 Stop</button>
        </div>
      )}
    </div>
  );
}

export default App;
