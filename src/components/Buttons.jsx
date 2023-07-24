import React from 'react';

const Buttons = ({ handlePrev, handleNext, currentId }) => {
  return (
    <div className="footerButtons">
      <button className="btn btn--previous" onClick={handlePrev} disabled={currentId === 1}>
        Previous
      </button>
      <button className="btn btn--next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
