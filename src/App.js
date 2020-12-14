import React, { useRef, useEffect } from 'react';
import Child from './Child';

function App() {
  const childRef = useRef();

  useEffect(() => {
    console.log(childRef.current);
    childRef.current.getName();
  })

  return (
    <div>
      <Child ref = {childRef} />
    </div>
  );
}

export default App;
