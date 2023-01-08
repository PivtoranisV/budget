import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCounter(counter + step);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={increment}>+</button>
      <br />
      <input
        type="text"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      />
    </div>
  );
}

export default Counter;
