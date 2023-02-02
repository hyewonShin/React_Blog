function App() {
  const number = 3;

  const double = (number) => {
    return number * 2;
  };

  return <div>{double(number)}</div>;
}

export default App;
