import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
