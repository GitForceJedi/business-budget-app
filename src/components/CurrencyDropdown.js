import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    const newCurrency = e.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className="alert alert-secondary" style={{ backgroundColor: 'grey' }}>
      <label htmlFor="currency-dropdown">Select Currency: </label>
      <select id="currency-dropdown" onChange={handleChange} value={currency}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
