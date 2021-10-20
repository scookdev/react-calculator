import './App.css';
import React, {useState, MouseEvent} from 'react';
import StandardKeypad from './components/StandardKeypad';
import RomanKeypad from './components/RomanKeypad';

const App = () => {
  const [input, setInput] = useState(0);

  const handleExpressionClick = (digit: number) => {
    const expression = document.getElementById("expression") as HTMLInputElement;
    input === 0 ? setInput(digit) : setInput(input + digit);
    expression.value = input.toString();
  }

  const handleResetClick = () => {
    setInput(0);
    const expression = document.getElementById("expression") as HTMLInputElement;
    expression.value = input.toString();
  }

  return (
    <>
      <div className="logo">
        <img src='./give.png' alt="Give" />
      </div>
      <StandardKeypad
        onExpressionClick={handleExpressionClick}
        onResetClick={handleResetClick}
      />
      <RomanKeypad />
    </>
  );
}

export default App;
