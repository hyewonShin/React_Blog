import { useState } from "react";
// 리렌더링  : 함수가 한 번 더 실행된다는 뜻.
function App() {
  console.log("render");
  const [number, setNumber] = useState(1);
  const double = () => {
    setNumber((prevState) => prevState * 2);
    setNumber((prevState) => prevState * 2);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={double}>Submit</button>
    </>
  );
}

export default App;
