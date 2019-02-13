# use-detect-print

React Hook to detect printing 

## Installation

```
npm install use-detect-print --save
```

## Usage

```javascript
import React from 'react';
import useDetectPrint from 'use-detect-print';

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

```
