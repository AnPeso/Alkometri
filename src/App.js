import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('0')
  const [bottle, setBottle] = useState('1')
  const [time, setTime] = useState('1')
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  const calculate = () => {
    let liters = bottle * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * parseFloat(time);

    const calculatedResult =
      gramsLeft < 0
        ? 0
        : gender === 'male'
        ? gramsLeft / (weight * 0.7)
        : gramsLeft / (weight * 0.6);

    setResult(parseFloat(calculatedResult.toFixed(1)));
  }

  return (
    <div id="container">
      <div>
        <h3>Calculating alcohol blood level</h3>
      </div>
       <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
      <label>Bottles</label>
        <select value={bottle} onChange={(e) => setBottle(e.target.value)}>
          {numbers.map((bottle) => (
            <option key={bottle} value={bottle}>
              {bottle} Pulloa
            </option>
          ))}
        </select>
      </div>
      <label>Time</label>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        {numbers.map((time) => (
          <option key={time} value={time}>
            {time} Tuntia
          </option>
        ))}
      </select>
      <div>
      <label>Gender</label>
        <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
        <label>Male</label>
        <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
        <label>Female</label>
    </div>
    <div>
      <label>Result</label>
      <output>{result.toFixed(1)}</output>
    </div>

    <div>
      <button type="button" onClick={calculate}>Calculate</button>
    </div>


    </div>
  );
}

export default App;
