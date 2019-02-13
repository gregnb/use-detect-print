import React from 'react';
import useDetectPrint from '../../src';

function App() {

  const isPrinting = useDetectPrint();

  return (
    <div>
     <span>Is it printing? </span>      
     {isPrinting ? (
       <span style={{ color: 'green', fontSize: 50 }}>Yes</span>
     ): (
       <span style={{ color: 'red' }}>No!</span>
     )}
    </div>
  );
}

export default App;
