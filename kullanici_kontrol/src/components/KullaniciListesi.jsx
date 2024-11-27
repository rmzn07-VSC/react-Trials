import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:3005";

function KullaniciListesi() {
  const [kullanicilar, setKullanicilar] = useState([]);
  const [aramaTerimi, setAramaTerimi] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users`);
        setKullanicilar(response.data);
      } catch (error) {
        console.error("Kullanıcılar alınamadı:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleArama = (e) => {
    setAramaTerimi(e.target.value);
  };

  const filtreliKullanicilar = aramaTerimi
    ? kullanicilar.filter(kullanici =>
        kullanici.ad.toLowerCase().includes(aramaTerimi.toLowerCase()) ||
        kullanici.soyad.toLowerCase().includes(aramaTerimi.toLowerCase())
      )
    : kullanicilar;

  const handleGuncelle = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      setKullanicilar(response.data);
    } catch (error) {
      console.error("Kullanıcılar güncellenemedi:", error);
    }
  };

  const handleSil = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/users/${id}`);
      const response = await axios.get(`${BASE_URL}/users`);
      setKullanicilar(response.data);
    } catch (error) {
      console.error("Kullanıcı silinemedi:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={aramaTerimi}
        onChange={handleArama}
        placeholder="Ara..."
      />
      <ul style={{ overflowY: 'auto', maxHeight: '205px' }}>
        {filtreliKullanicilar.map(kullanici => (
          <li key={kullanici.id} onDoubleClick={() => handleSil(kullanici.id)}>
            {kullanici.ad} {kullanici.soyad}
          </li>
        ))}
      </ul>
      <button onClick={handleGuncelle}>Güncelle</button>
    </div>
  );
}

export default KullaniciListesi;