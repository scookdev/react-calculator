import './App.css';
import {useState} from 'react';
import StandardKeypad from './components/StandardKeypad';
import RomanKeypad from './components/RomanKeypad';
import NumeralFormatConverter from './lib/converters';

const App = () => {
  const [keypad, setKeypad] = useState('standard');
  const [status, setStatus] = useState('');

  const handleExpressionClick = (digit: string) => {
    const expression = document.getElementById("expression") as HTMLInputElement;
    if (status === 'new') {
      expression.value = '';
      setStatus('');
    }
    const memory = expression.value === '0' ? '' : expression.value;
    expression.value = memory + digit;
  }

  const handleResetClick = () => {
    const expression = document.getElementById("expression") as HTMLInputElement;

    expression.value = keypad === 'standard' ? '0' : '';
  }

  const handleResultsClick = () => {
    setStatus('new');
    const converter = new NumeralFormatConverter();
    const expression = document.getElementById("expression") as HTMLInputElement;

    let operator: string = '';

    if (keypad === 'roman') {
      if (expression.value.includes('+')) {
        operator = '+';
      } else if (expression.value.includes('-')) {
        operator = '-';
      } else if (expression.value.includes('*')) {
        operator = '*';
      } else if (expression.value.includes('÷')) {
        operator = '÷';
      }

      let equationNumbers: string[] = expression.value.split(operator);
      const converted: Array<number> = [];

      try {
        equationNumbers.forEach(item => {
          let standardNumber = converter.romanToStandard(item);
          converted.push(standardNumber);
        });
        let result: number = eval(`${converted[0]} ${operator.replace('÷', '/')} ${converted[1]}`);
        expression.value = converter.standardToRoman(result);
      } catch (e) {
        expression.value = (e as Error).message;
      }
    } else {
      expression.value = eval(expression.value.replace('÷', '/'));
    }
  }

  const handleKeypadTypeClick = () => {
    keypad === 'standard' ? setKeypad('roman') : setKeypad('standard');
  }

  if (keypad === 'standard') {
    return (
      <StandardKeypad
        onExpressionClick={handleExpressionClick}
        onResetClick={handleResetClick}
        onResultsClick={handleResultsClick}
        onKeypadTypeClick={handleKeypadTypeClick}
      />
    );
  } else {
    return (
      <RomanKeypad
        onExpressionClick={handleExpressionClick}
        onResetClick={handleResetClick}
        onResultsClick={handleResultsClick}
        onKeypadTypeClick={handleKeypadTypeClick}
      />
    );
  }
}

export default App;
