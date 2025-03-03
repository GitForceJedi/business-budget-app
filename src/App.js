import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext'; // Make sure AppContext is exported from AppContext
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencyDropdown from './components/CurrencyDropdown';
import BarGraph from './components/BarGraph';
import PieChart from './components/PieChart';
import GreetingPopup from './components/GreetingsPopUp';

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <GreetingPopup />
        <h1 className="mt-3">Business Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <CurrencyDropdown />
          </div>
        </div>
        <h3 className="mt-3">Change allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm />
          </div>
        </div>
        <br />
        <h3 className="mt-3">Allocation</h3>
        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <br />
        <div className="row mt-3">
          <div className="col-sm">
            <BarGraph /> {/* Pass expenses from context */}
          </div>
        </div>
        <br />
        <div className="row mt-3">
          <div className="col-sm">
            <PieChart /> {/* Pass expenses from context */}
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
