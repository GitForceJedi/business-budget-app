import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { currency, budget, expenses, dispatch } = useContext(AppContext);
  const [inputBudget, setInputBudget] = useState(budget);
  const [focused, setFocused] = useState(false);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleInputChange = (input) => {
    setInputBudget(input.target.value);
  };

  const handleInputBlur = () => {
    const newInputBudget = parseInt(inputBudget);

    if (inputBudget === '') {
      // Handle empty input value
      setInputBudget(budget); // Restore previous budget value
    } else if (!isNaN(newInputBudget) && newInputBudget >= totalExpenses) {
      // Ensure the input is a valid number and larger than or equal to totalExpenses
      if (newInputBudget <= 20000) {
        dispatch({
          type: 'SET_BUDGET',
          payload: newInputBudget,
        });
      } else {
        // Display an error when input exceeds 20000
        alert('Budget cannot exceed 20000!');
        setInputBudget(budget); // Restore previous budget value
      }
    } else {
      // Display an error for invalid input
      alert(
        'Budget must be a valid number larger than or equal to Spent So Far!'
      );
      setInputBudget(budget); // Restore previous budget value
    }

    setFocused(false); // Set focus state to false
  };

  return (
    <div className="alert alert-secondary" style={{ backgroundColor: 'grey' }}>
      <span>Budget: {currency}</span>
      <input
        type="number"
        value={focused ? inputBudget : budget} // Show inputBudget while focused, else show budget
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={() => setFocused(true)} // Set focus state to true when input is focused
        step={10} // Adjust the step value as needed (e.g., 0.01 for decimals)
      />
    </div>
  );
};

export default Budget;
