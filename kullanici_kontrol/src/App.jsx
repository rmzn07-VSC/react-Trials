import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import KullaniciListesi from './components/KullaniciListesi';

function App() {
  const [kullanicilar, setKullanicilar] = useState([]);

  return (
    <div className="app-container">
      <div className="form-container"> {/* Form'u kapsayan div */}
        <Form setKullanicilar={setKullanicilar} /> 
      </div>
      <div className="list-container">
        <KullaniciListesi kullanicilar={kullanicilar} />
      </div>
    </div>
  );
}

export default App;