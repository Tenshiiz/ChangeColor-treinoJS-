import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState('');

  const [value, setValue] = useState('');

const Change = (event) => {
  setValue(event.target.value);
}

  return (

    <div style={{backgroundColor: count}} className="App">
      <div className='content'>
        <h2>
          Background Color : {count}
        </h2>
        <div>
          <button onClick={() => setCount(value)}>CLICK ME</button>
          <input type='color' onChange={Change} />
        </div>
      </div>
    </div>
  );
}


export default App;
