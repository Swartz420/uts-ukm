import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

// web ini dibantu oleh ai
// Data mahasiswa
const students = [
  { name: 'Aldi', npm: '2428240162', github: 'https://github.com/Swartz420' }
];

  useEffect(() => {
    if (count === 0) {
      document.title = "Ini adalah Web";
    } else if (count === 1) {
      document.title = "Sudah 1 kali klik";
    } else {
      document.title = `Sudah ${count} kali klik`;
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Menambahkan handler untuk event keydown
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.key === 'Enter' && inputText.trim() !== '') {
        alert(`Halo ${inputText}!`);
        setInputText(''); // Mengosongkan input setelah alert
      }
    }
  };

  return (
    <div>
      {/* Menampilkan nama*/}
      <ul style={{ listStyleType: 'none' }}>
  {students.map((student, index) => (
    <li key={index}>
      <div>{student.name}</div>
      <div>{student.npm}</div>
      <a href={student.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    </li>
  ))}
</ul>

      {/* Menampilkan jumlah klik dengan ukuran font yang lebih kecil */}
      <h2 style={{ fontSize: '1.8rem', marginLeft: '5px' }}>Jumlah Klik: {count}</h2>
      <button 
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '14px',
          cursor: 'pointer',
          marginBottom: '20px',
          marginLeft: '5px'
        }}
      >
        Klik..!
      </button>

      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Ketik..."
          style={{
            padding: '8px',
            fontSize: '14px',
            width: '200px',
            marginLeft: '5px'
          }}
        />
      </div>
    </div>
  );
}

export default App;