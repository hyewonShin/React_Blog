import { useState } from "react";

function App() {
  const [number, setNumber] = useState(3);

  const double = () => {
    const doubledNumber = number * 2;
    setNumber(doubledNumber);
    console.log(doubledNumber);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={double}>Submit</button>
    </>
  );
}

export default App;
