import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = "http://localhost:3005";

function Form({ setKullanicilar }) {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [sifre, setSifre] = useState('');
  const [hataMesaji, setHataMesaji] = useState(''); // Hata mesajı için state
  const [basariliMesaj, setBasariliMesaj] = useState(''); // Başarılı kayıt için mesaj

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHataMesaji(''); 
    setBasariliMesaj(''); // Mesajları temizleme

    if (!ad || !soyad || !sifre) {
      setHataMesaji('Lütfen tüm alanları doldurun!');
      return;
    }

    try {
      const mevcutKullanicilar = (await axios.get(`${BASE_URL}/users`)).data;
      const kullaniciVarMi = mevcutKullanicilar.some(kullanici => 
        kullanici.ad.toLowerCase() === ad.toLowerCase() && 
        kullanici.soyad.toLowerCase() === soyad.toLowerCase()
      );

      if (kullaniciVarMi) {
        setHataMesaji('Bu kullanıcı zaten kayıtlı!');
        return;
      }

      const yeniKullanici = { ad, soyad, sifre };
      await axios.post(`${BASE_URL}/users`, yeniKullanici);
      console.log('Kullanıcı eklendi!');
      setAd('');
      setSoyad('');
      setSifre('');
      setBasariliMesaj('Kullanıcı başarıyla eklendi!'); // Başarılı kayıt mesajı

      const guncelKullanicilar = (await axios.get(`${BASE_URL}/users`)).data;
      setKullanicilar(guncelKullanicilar);
    } catch (error) {
      console.error('Kullanıcı eklenemedi:', error);
      setHataMesaji('Kullanıcı eklenemedi. Lütfen tekrar deneyin.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {hataMesaji && <p style={{ color: 'red' }}>{hataMesaji}</p>} 
      {basariliMesaj && <p style={{ color: 'green' }}>{basariliMesaj}</p>} {/* Başarılı kayıt mesajını gösterme */}
      <div>
        <label>
          Ad:
          <input 
            placeholder="Adınızı Yazınız..." 
            type="text" 
            value={ad} 
            onChange={e => setAd(e.target.value)} 
            required /> {/* required özniteliği eklendi */}
        </label>
      </div>
      <div>
        <label>
          Soyad:
          <input 
            placeholder="Soyadınızı Yazınız..." 
            type="text" 
            value={soyad} 
            onChange={e => setSoyad(e.target.value)} 
            required /> {/* required özniteliği eklendi */}
        </label>
      </div>
      <div>
        <label>
          Şifre:
          <input 
            placeholder="Şifrenizi Giriniz..." 
            type="password" 
            value={sifre} 
            onChange={e => setSifre(e.target.value)} 
            required /> {/* required özniteliği eklendi */}
        </label>
      </div>
      <button type="submit">Kaydet</button>
    </form>
  );
}

Form.propTypes = {
  setKullanicilar: PropTypes.func.isRequired,
};

export default Form;