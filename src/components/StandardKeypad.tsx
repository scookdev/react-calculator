import {FunctionComponent} from 'react';

interface KeypadProps {
  onExpressionClick: (digit: string) => void
  onResetClick: () => void
  onResultsClick: () => void
  onKeypadTypeClick: () => void
}

const StandardKeypad: FunctionComponent<KeypadProps> = ({
  onExpressionClick,
  onResetClick,
  onResultsClick,
  onKeypadTypeClick
}): JSX.Element => {
  return (
    <>
      <div className='container calculator' >
        <div style={{gridColumn: '1/5', gridRow: '1/1', paddingTop: '15px', paddingBottom: '15px', paddingRight: '17px'}}>
          <form>
            <input defaultValue="0" id="expression" type="text" readOnly style={{
              backgroundColor: '#000',
              color: '#fff',
              border: '0',
              width: '95%',
              height: '35px',
              textAlign: 'right'
            }} />
          </form>
        </div>
        <button className='modBtn' style={{gridColumn: '1/3', width: '166px'}} onClick={onResetClick}>Clear</button>
        <button className='romanBtn' style={{gridColumn: '3/5', width: '166px'}} onClick={onKeypadTypeClick} >Roman</button>

        <button className='calcBtn' onClick={() => onExpressionClick('7')}>7</button>
        <button className='calcBtn' onClick={() => onExpressionClick('8')}>8</button>
        <button className='calcBtn' onClick={() => onExpressionClick('9')}>9</button>
        <button className='operatorBtn' onClick={() => onExpressionClick('÷')}>÷</button>

        <button className='calcBtn' onClick={() => onExpressionClick('4')}>4</button>
        <button className='calcBtn' onClick={() => onExpressionClick('5')}>5</button>
        <button className='calcBtn' onClick={() => onExpressionClick('6')}>6</button>
        <button className='operatorBtn' onClick={() => onExpressionClick('*')}>*</button>

        <button className='calcBtn' onClick={() => onExpressionClick('1')}>1</button>
        <button className='calcBtn' onClick={() => onExpressionClick('2')}>2</button>
        <button className='calcBtn' onClick={() => onExpressionClick('3')}>3</button>
        <button className='operatorBtn' onClick={() => onExpressionClick('-')}>-</button>

        <button className='calcBtn' onClick={() => onExpressionClick('0')}>0</button>
        <button className='calcBtn' onClick={() => onExpressionClick('.')}>.</button>
        <button className='calcBtn' onClick={() => onResultsClick()}>=</button>
        <button className='operatorBtn' onClick={() => onExpressionClick('+')}>+</button>
      </div>
    </>
  );
}


export default StandardKeypad;
