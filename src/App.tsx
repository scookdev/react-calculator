import './App.css';
import {useState} from 'react';
import StandardKeypad from './components/StandardKeypad';
import RomanKeypad from './components/RomanKeypad';

const App = () => {
  const [input, setInput] = useState('0');

  const handleExpressionClick = (digit: string) => {
    // setInput(input + digit);
    const expression = document.getElementById("expression") as HTMLInputElement;
    // expression.value = input;
    const memory = expression.value === '0' ? '' : expression.value;
    expression.value = memory + digit;
  }

  const handleResetClick = () => {
    setInput('0');
    const expression = document.getElementById("expression") as HTMLInputElement;
    expression.value = input.toString();
  }

  const handleResultsClick = () => {
    const expression = document.getElementById("expression") as HTMLInputElement;
    expression.value = eval(expression.value.replace('÷', '/'));
  }

  return (
    <>
      <div className="logo">
        <img src='./give.png' alt="Give" />
      </div>
      <StandardKeypad
        onExpressionClick={handleExpressionClick}
        onResetClick={handleResetClick}
        onResultsClick={handleResultsClick}
      />
    </>
  );
}

export default App;
