import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleMinCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Test Count</h1>
      <p>{count}</p>
      <button onClick={handleAddCount}> + </button>
      <button onClick={handleMinCount}> - </button>
    </>
  );
}

export default App;
