import React, { useState } from "react";

const DateTimePicker = ({ getEndTime }) => {
  const [inputTime, setInputTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getEndTime(inputTime);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='datetime-local'
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default DateTimePicker;
