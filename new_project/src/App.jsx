//  App.jsx 

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false); 
  const [operation, setOperation] = useState("");

  const [history, setHistory] = useState([]); //  Değişim  Geçmişini   Tutmak  için   
  const [currentIndex, setCurrentIndex] = useState(-1); //  Geçmiş   İndeksi



  //    İlk  kez   yüklendiğinde   veya   isMouseDown  state  değiştiğinde çalışacak  useEffect    hook
  useEffect(() => { 
    let intervalId;

    if (isMouseDown) { //   Mouse  basılı   ise  
      intervalId = setInterval(() => { 
        if (operation === "arttir") setCount(count + 1);
        if (operation === "bol") setCount(count / 2); 
        if (operation === "azalt") setCount(count - 1);
        if (operation === "carp2") setCount(count * 2);
        if (operation === "carp3") setCount(count * 3); 
        if (operation === "carp4") setCount(count * 4);

        setHistory([...history, count]); 

        setCurrentIndex((prevIndex) => prevIndex + 1);

        console.log(count);
      }, 0.01);
    }
    return () => clearInterval(intervalId);
  }, [isMouseDown, operation, count, history, currentIndex]); 
  //  Tüm  state   ve   fonksiyonlara  bağımlı 
  //  count  state'ini    eklemeyiniz! 


  // Geri alma işlemi: 
  const handleUndo = () => {
    if (currentIndex > 0) { 
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setCount(history[currentIndex]);
    } 
  };

  // İleri alma işlemi:
  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1); 
      setCount(history[currentIndex]); 
    }
  };

  //  `count`  state   değerine  göre  arka plan rengi  değişsin.
  useEffect(() => {
    // Arka planı değiştirmek için  "document.body"  kullanıyoruz  .
    document.body.style.backgroundColor = getRandomColor();
  }, [count]);
  // count'a bağlı 

  //  Bu   fonksiyonu   kaldırıyoruz  :
  //  const handleMouseDown = (buttonType) => { 
  //    setIsMouseDown(true); 
  //    setOperation(buttonType); 
  //  }; 

  //  Bu   fonksiyonu   da   kaldırıyoruz:
  //  const handleMouseUp = () => { 
  //    setIsMouseDown(false); 
  //    setOperation(""); 
  //  };

  return ( 
    <div> 
      <h1>Sayac: {count}</h1> 
      <div> 
        <button
        className="button green"
        onMouseDown={() => {
          setIsMouseDown(true);
          setOperation("arttir");
        }}
        onMouseUp={() => setIsMouseDown(false)}>
          Arttır
        </button>

        <button
        className="button red"
        onMouseDown={() => {
          setIsMouseDown(true);
          setOperation("azalt");
        }}
        onMouseUp={() => setIsMouseDown(false)}>
          Azalt
        </button>

        <button
        className="button yellow"
        onMouseDown={() => {
          setIsMouseDown(true);
          setOperation("bol");
        }}
        onMouseUp={() => setIsMouseDown(false)}>
          Böl
        </button>

        <button
        className="button violet"
        onMouseDown={() => {
          setIsMouseDown(true);
          setOperation("carp2");
        }}
        onMouseUp={() => setIsMouseDown(false)}>
          2 İle Çarp
        </button>

        <button
        className="button purple"
        onMouseDown={() => {
          setIsMouseDown(true);
          setOperation("carp3");
        }}
        onMouseUp={() => setIsMouseDown(false)}>
          3 İle Çarp
        </button>

        <button
        className="button brown"
        onMouseDown={() => {
          setIsMouseDown(true);
          setOperation("carp4");
        }}
        onMouseUp={() => setIsMouseDown(false)}>
          4 İle Çarp
        </button>
      </div>
      <button
      className="button orange"
      onClick={() => {
        setCount(0);
        setOperation("");
        setHistory([]); //  Geçmiş  sıfırlandı
        setCurrentIndex(-1);
        console.log(count);
      }}>
        Sıfırla
      </button>

      <button
        onClick={handleUndo}>
        Geri Al
      </button>

      <button
        onClick={handleRedo}>
        İleri Al
      </button>

      <div id="arkaPlan"></div>  {/*  Bu  elementi    HTML    dosyasına   ekleyin   */}
      {/* Değerleri  görünütülme   ** (İnceleme  Amaçlı)**
      <span> {`isMouseDown:  ${isMouseDown} `} </span>
      <span> {`currentlyClickedButton:   ${currentlyClickedButton} `}  </span>
      <span> {`count:  ${count} `}  </span>
      <span> {`history:   ${JSON.stringify(history)}   `}  </span>
      <span> {`currentIndex:  ${currentIndex} `} </span> */}
    </div>
  );
}

function getRandomColor() {
  //  `count`   state   değeri   değiştiğinde  ,**   **sayfanın**    **arka   plan   renginin**    **değiştiğini   **    **görün  !**    😊
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default App;