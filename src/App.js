import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  let now = new Date();
  let timeNow = now.getTime();
  let fin = new Date('Sep 12 2021 08:00:00 GMT-0400').getTime();
  let diff = fin - timeNow;
  const [count, setCount] = useState(diff);

  useEffect(() => {
    setTimeout(function () { setCount(count - 1000) }, 1000);
  });

  return (
    <div className="contenedor">

      <div className="time--contenedor">
        <div className="time">
          <p className="time--value">{days(count)}</p>
          <p className="time--tag">DAYS</p>
        </div>
        <div className="time">
          <p className="time--value">{hours(count)}</p>
          <p className="time--tag">HOURS</p>
        </div>
        <div className="time">
          <p className="time--value">{minutes(count)}</p>
          <p className="time--tag">MINS</p>
        </div>
        <div className="time">
          <p className="time--value">{seconds(count)}</p>
          <p className="time--tag">SECS</p>
        </div>
      </div>

      <p className="footer--quote">
        to see you again
      </p>
    </div>
  );
}


const seconds = (ms) => {
  var minutesms = ms % (60 * 1000);
  return Math.floor((minutesms) / (1000));
}

const minutes = (ms) => {
  var hoursms = ms % (60 * 60 * 1000);
  return Math.floor((hoursms) / (60 * 1000));
}

const hours = (ms) => {
  var daysms = ms % (24 * 60 * 60 * 1000);
  return Math.floor((daysms) / (60 * 60 * 1000));

}

const days = (ms) => {
  var days = Math.floor(ms / (24 * 60 * 60 * 1000));
  return days
}





export default App;
