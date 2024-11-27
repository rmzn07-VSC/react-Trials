import { useState, useEffect, useRef, useMemo } from 'react';
import '../css/currency.css';
import { FaArrowRight } from "react-icons/fa";

const availableCurrencies = ['USD', 'EUR', 'TRY', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'BRL', 'INR', 'MXN', 'SGD', 'HKD', 'NZD', 'SEK', 'DKK', 'NOK', 'CZK', 'PLN', 'HUF', 'RON', 'ZAR', 'RUB'];

function Currency() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [exchangeRates, setExchangeRates] = useState({});
  const [error, setError] = useState(null);
  const [selectedAmountIndex, setSelectedAmountIndex] = useState(0);
  const amountOptions = useMemo(() => [1, 5, 10, 20, 50, 100, 200, 500, 1000], []);
  const amountOptionsLength = amountOptions.length;
  const amountSelectRef = useRef(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        if (!response.ok) {
          throw new Error(`HTTP hatası! Durum kodu: ${response.status}`);
        }
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        setError(error);
        console.error("Hata: ", error);
      }
    };
    fetchRates();
  }, []);

  useEffect(() => {
    const calculateResult = () => {
      if (amount === '' || !exchangeRates[toCurrency] || !exchangeRates[fromCurrency]) {
        setResult('');
        return;
      }

      const amountNum = parseFloat(amount);
      let calculatedResult;

      if (fromCurrency === 'USD') {
        calculatedResult = amountNum * exchangeRates[toCurrency];
      } else {
        calculatedResult = (amountNum / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
      }

      setResult(calculatedResult.toFixed(2));
    };
    calculateResult();
  }, [fromCurrency, toCurrency, amount, exchangeRates]);

  useEffect(() => {
    setAmount(amountOptions[selectedAmountIndex]);
  }, [selectedAmountIndex, amountOptions, setAmount]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      let newIndex = selectedAmountIndex + (e.deltaY > 0 ? -1 : 1);
      newIndex = (newIndex + amountOptionsLength) % amountOptionsLength;
      setSelectedAmountIndex(newIndex);
    };

    // amountSelectRef.current null kontrolü eklendi.
    const selectElement = amountSelectRef.current;
    if (selectElement) {
      selectElement.addEventListener('wheel', handleWheel);
      return () => selectElement.removeEventListener('wheel', handleWheel);
    }
  }, [selectedAmountIndex, amountOptionsLength]);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const currencyOptions = availableCurrencies.map((currency) => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ));

  return (
    <div className="currency-div">
      <div className='header'>
        <h2>DÖVİZ KURU UYGULAMASI</h2>
      </div>
      <div className='input-area'>
        <div className="amount-container">
          <select className='amount' ref={amountSelectRef} value={selectedAmountIndex} onChange={(e) => setSelectedAmountIndex(parseInt(e.target.value, 10))}>
            {amountOptions.map((amount, index) => (
              <option key={index} value={index}>{amount}</option>
            ))}
          </select>
          <input type="number" value={amount} style={{ display: 'none' }} />
        </div>
        <select className='from-currency-option' value={fromCurrency} onChange={handleFromCurrencyChange}>
          {currencyOptions}
        </select>
        <FaArrowRight style={{ fontSize: '25px', marginRight: '10px', color: 'red' }} />
        <select className='to-currency-option' value={toCurrency} onChange={handleToCurrencyChange}>
          {currencyOptions}
        </select>
        <input type="number" className='result' value={result} readOnly />
        {error && <p style={{ color: 'red' }}>Hata: {error.message}</p>}
      </div>
    </div>
  );
}

export default Currency;