import React from 'react';
import './App.css'

function App() {

  const [display, setDisplay] = React.useState('');

  const handleClick = (e) => {
    console.log(e.target.innerText);

    switch (e.target.innerText) {

      case "C":
        setDisplay('');
        break;

      case "=":
        try {
          setDisplay(eval(display).toString());
        } catch (error) {
          setDisplay('Syntax Error');
          setTimeout(() => {
            setDisplay('');
          }, 1000);
        }
        break;

      case '←':
        if (display)
          setDisplay(display.substring(0, display.length - 1));
        break;

      default:
        setDisplay(display + " " + e.target.innerText);
        break;
    }
  }


  return (
    <div className='container'>
      <div id='display'>{display}</div>

      <div className='buttons'>

        <div className="button" onClick={handleClick}>C</div>
        <div className="button" onClick={handleClick}>/</div>
        <div className="button" onClick={handleClick}>*</div>
        <div className="button" onClick={handleClick}>&larr;</div>
        <div className="button" onClick={handleClick}>7</div>
        <div className="button" onClick={handleClick}>8</div>
        <div className="button" onClick={handleClick}>9</div>
        <div className="button" onClick={handleClick}>-</div>
        <div className="button" onClick={handleClick}>4</div>
        <div className="button" onClick={handleClick}>5</div>
        <div className="button" onClick={handleClick}>6</div>
        <div className="button" onClick={handleClick}>+</div>
        <div className="button" onClick={handleClick}>1</div>
        <div className="button" onClick={handleClick}>2</div>
        <div className="button" onClick={handleClick}>3</div>
        <div className="button" onClick={handleClick}>.</div>
        <div className="button" onClick={handleClick}>(</div>
        <div className="button" onClick={handleClick}>0</div>
        <div className="button" onClick={handleClick}>)</div>

        <div className="button" id="equal" onClick={handleClick}>=</div>

      </div>
    </div>
  )
}

export default App
