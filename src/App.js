import React from 'react';
import Main from './components/Main';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className="App">
      <Main />
      <div className='footer'>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;