import React, { useState } from 'react';

function App() {

  var [temperature, setTemperature] = useState("");
  var [convertedTemp, setConvertedTemp] = useState("");

  // Convert input to celsius

  function convertToC() {
    setConvertedTemp((temperature - 32) * (5/9) + " C");
  }

  // Convert input to farenheight

  function convertToF() {
    setConvertedTemp(temperature * (9/5) + 32 + " F");
  }

  // Get temperature from onchange event

  function getTempFromHTMLEvent(event) {
    setTemperature(parseFloat(event.target.value));
  }

  return (
    <div>
      <h1>React Temperature Conversion Example</h1>
      <label>Temperature: </label>
      <input onChange={getTempFromHTMLEvent}></input><br></br>
      <button onClick={convertToC}>Convert to Celsius</button>
      <button onClick={convertToF}>Convert to Fahrenheit</button><br></br>
      <span>Temperature: {convertedTemp}</span>
    </div>
  );

}

export default App;
