import React, {FunctionComponent} from 'react';

interface KeypadProps {
  onExpressionClick: (digit: number) => void
  onResetClick: () => void
}

const StandardKeypad: FunctionComponent<KeypadProps> = ({
  onExpressionClick,
  onResetClick
}): JSX.Element => {
  return (
    <>
      <div className='calculator' >
        <div style={{gridColumn: '1/5', gridRow: '1/1', padding: '12px'}}>
          <form>
            <input defaultValue="0" id="expression" type="text" readOnly style={{
              backgroundColor: '#000',
              color: '#fff',
              border: '0',
              height: '35px',
              textAlign: 'right'
            }} />
          </form>
        </div>
        <button className='calcBtn'>AC</button>
        <button className='calcBtn'>+/-</button>
        <button className='calcBtn'>%</button>
        <button className='calcBtn'>÷</button>

        <button className='calcBtn' onClick={() => onExpressionClick(7)}>7</button>
        <button className='calcBtn'>8</button>
        <button className='calcBtn'>9</button>
        <button className='calcBtn'>*</button>

        <button className='calcBtn'>4</button>
        <button className='calcBtn'>5</button>
        <button className='calcBtn'>6</button>
        <button className='calcBtn'>-</button>

        <button className='calcBtn'>1</button>
        <button className='calcBtn'>2</button>
        <button className='calcBtn'>3</button>
        <button className='calcBtn'>+</button>

        <button className='calcBtn'>0</button>
        <button className='calcBtn'>.</button>
        <button className='calcBtn'>=</button>
      </div>
    </>
  );
}


export default StandardKeypad;
