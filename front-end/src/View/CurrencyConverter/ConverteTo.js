import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Converter() {
    const [baseCurrency, setBaseCurrency] = useState('INR');
    const [targetCurrency, setTargetCurrency] = useState('USD');
    const [exchangeRate, setExchangeRate] = useState(2);
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
  
    useEffect(() => {
      axios.get(`https://data.fixer.io/api/latest?access_key=YOUR_ACCESS_KEY&base=${baseCurrency}&symbols=${targetCurrency}`)
        .then(response => {
            console.log(response,targetCurrency)
          const rate = response.data.rates[targetCurrency];
          setExchangeRate(rate);
        })
        .catch(error => {
          console.log(error);
        });
    }, [baseCurrency, targetCurrency]);
  
    function handleBaseCurrencyChange(event) {
      const value = event.target.value;
      setBaseCurrency(value);
    }
  
    function handleTargetCurrencyChange(event) {
      const value = event.target.value;
      setTargetCurrency(value);
    }
  
    function handleAmountChange(event) {
      const value = event.target.value;
      setAmount(value);
      setConvertedAmount(value * exchangeRate);
    }
  
    return (
      <div>
        <label>
          Base Currency:
          <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            {/* add more currency options as needed */}
          </select>
        </label>
        <br />
        <label>
          Target Currency:
          <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            {/* add more currency options as needed */}
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <div>
          {amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}
        </div>
      </div>
    );
  }
  
  export default Converter;
  