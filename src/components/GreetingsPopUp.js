import React, { useState } from 'react';

const GreetingPopup = () => {
  // State to track visibility of the popup
  const [isVisible, setIsVisible] = useState(true);

  // Handle closing the popup
  const handleClose = () => {
    setIsVisible(false);
  };

  // If the popup is visible, render it, otherwise return null
  return (
    <>
      {isVisible && (
        <div className="popup-container">
          {' '}
          {/* Popup container */}
          <div className="popup">
            {' '}
            {/* Greeting text */}
            <button onClick={handleClose} className="close-button">
              &times; {/* "X" for close */}
            </button>
            <br />
            <h1>WELCOME!</h1>
            <br />
            {/* Popup box */}
            <span className="greeting-text">
              Welcome to the Business Budget App! This tool allows you to
              allocate, adjust, and manage your business budget. You can set the
              total budget by entering the desired amount in the "Budget"
              section. To modify the budget, simply input the amount you wish to
              add or subtract in the "Change Allocation" section. The
              "Allocation" section displays the current budget distribution
              across departments, allowing you to adjust each department’s
              budget by increments of +10 or -10. As you interact with the app,
              all values dynamically update using React's state management.
              Below the allocation table, you will find two graphs that provide
              a visual representation of the budget distribution across the
              business. The bar graph illustrates the allocation for each
              department, while the pie chart shows the percentage of the total
              budget allocated to each department.
            </span>{' '}
            <br />
            <br />
            <span className="greeting-text">
              When ready click the ""X" in the upper right corner to begin using
              the Business Budget App.
            </span>{' '}
            <br />
            <br />
          </div>
        </div>
      )}
    </>
  );
};

export default GreetingPopup;
