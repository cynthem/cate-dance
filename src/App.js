import React from 'react';
import Main from './components/Main';
import Left from './components/Left';
import Right from './components/Right';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App">
      <Main />
      <div className='middle'>
        <Left />
        <Right />
      </div>
      <Bottom />
    </div>
  );
}

export default App;