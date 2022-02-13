import React from 'react';
import GrandChildComponent from './GrandChildComponent';
import GrandChildComponentHook from './GrandChildComponentHook';

const ChildComponent = () => {
  return (
    <>
      <h1> Child component </h1>
      <GrandChildComponent />
      <GrandChildComponentHook/>
    </>
  );
};

export default ChildComponent;