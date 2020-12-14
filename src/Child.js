import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const Child = forwardRef((props, ref) => {
  let name = 'Alice';
  const divRef = useRef();

  useEffect(() => {
    console.log(divRef);
  })

  useImperativeHandle(ref, () => ({
    getName() {
      console.log(name);
    }
  }))

  return (
    <span ref = {divRef}>
      这是子组件
    </span>
  );
})

export default Child;