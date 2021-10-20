import './App.css';
import {useState} from 'react';
import StandardKeypad from './components/StandardKeypad';
import RomanKeypad from './components/RomanKeypad';

const App = () => {
  const [input, setInput] = useState('0');

  const handleExpressionClick = (digit: string) => {
    const expression = document.getElementById("expression") as HTMLInputElement;
    setInput(input + digit);
    expression.value = input;
  }

  const handleResetClick = () => {
    setInput('0');
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
    </>
  );
}

export default App;
