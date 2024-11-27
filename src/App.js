// Import library yang dibutuhkan dari React
import React, { useState, useEffect } from 'react';

function App() {
  // State untuk menyimpan jumlah klik
  // count: nilai state, setCount: fungsi untuk mengubah state
  const [count, setCount] = useState(0);

  // State untuk menyimpan nilai input
  // inputText: nilai state, setInputText: fungsi untuk mengubah state
  const [inputText, setInputText] = useState('');

  // useEffect akan dijalankan setiap kali nilai count berubah
  useEffect(() => {
    // Mengubah judul tab browser berdasarkan jumlah klik
    if (count === 0) {
      document.title = "Ini Web";
    } else if (count === 1) {
      document.title = "1 kali klik";
    } else {
      document.title = `${count} kali klik`;
    }
  }, [count]); // [count] adalah dependency, useEffect hanya jalan jika count berubah

  // Fungsi yang dijalankan ketika tombol diklik
  const handleClick = () => {
    setCount(count + 1); // Menambah nilai count sebanyak 1
  };

  // Fungsi yang dijalankan ketika nilai input berubah
  const handleInputChange = (e) => {
    setInputText(e.target.value); // Mengupdate nilai inputText sesuai yang diketik
  };

  // Fungsi yang dijalankan ketika tombol keyboard ditekan
  const handleKeyDown = (e) => {
    // Cek jika tombol Enter ditekan dan input tidak kosong
    if (e.key === 'Enter' && inputText.trim() !== '') {
      alert(`Halo ${inputText}!`); // Menampilkan alert dengan nama yang diketik
      setInputText(''); // Mengosongkan input setelah Enter
    }
  };

  // Tampilan komponen
  return (
    <div>
      {/* Menampilkan jumlah klik */}
      <h1>Jumlah Klik: {count}</h1>

      {/* Tombol untuk menambah jumlah klik */}
      <button onClick={handleClick}>
        Klik Saya!
      </button>

      <div>
        {/* Input untuk mengetik nama */}
        <input
          type="text"
          value={inputText} // Nilai input diambil dari state inputText
          onChange={handleInputChange} // Fungsi yang dipanggil saat input berubah
          onKeyDown={handleKeyDown} // Fungsi yang dipanggil saat tombol ditekan
          placeholder="Ketik danEnter..." // Text bantuan di input
        />
      </div>
    </div>
  );
}

// Mengekspor komponen App agar bisa digunakan di file lain
export default App;
