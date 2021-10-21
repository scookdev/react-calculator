import {FunctionComponent} from 'react';

interface KeypadProps {
  onExpressionClick: (digit: string) => void
  onResetClick: () => void
  onResultsClick: () => void
  onKeypadTypeClick: () => void
}

const RomanKeypad: FunctionComponent<KeypadProps> = ({
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
            <input id="expression" type="text" readOnly style={{
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
        <button className='romanBtn' style={{gridColumn: '3/5', width: '166px'}} onClick={onKeypadTypeClick} >Standard</button>

        <button className='calcBtn' onClick={() => onExpressionClick('C')}>C</button>
        <button className='calcBtn' onClick={() => onExpressionClick('D')}>D</button>
        <button className='calcBtn' onClick={() => onExpressionClick('M')}>M</button>
        <button className='operatorBtn' onClick={() => onExpressionClick('÷')}>÷</button>

        <button className='calcBtn' onClick={() => onExpressionClick('V')}>V</button>
        <button className='calcBtn' onClick={() => onExpressionClick('X')}>X</button>
        <button className='calcBtn' onClick={() => onExpressionClick('L')}>L</button>
        <button className='operatorBtn' onClick={() => onExpressionClick('*')}>*</button>

        <button className='calcBtn' style={{gridColumn: '3/4'}} onClick={() => onExpressionClick('I')}>I</button>
        <button className='operatorBtn' style={{gridColumn: '4/5'}} onClick={() => onExpressionClick('-')}>-</button>

        <button className='calcBtn' style={{gridColumn: '3/4'}} onClick={() => onResultsClick()}>=</button>
        <button className='operatorBtn' style={{gridColumn: '4/5'}} onClick={() => onExpressionClick('+')}>+</button>
      </div>
    </>
  );
}


export default RomanKeypad;
