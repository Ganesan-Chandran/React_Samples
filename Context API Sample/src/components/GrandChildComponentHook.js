import React from 'react';
import SampleContext from '../SampleContext';

const GrandChildComponentHook = () => {

  const context = React.useContext(SampleContext);

  return (
    <>
      <h1> Grand Child component Hook</h1>
      <h4>User Details</h4>
      Name : {context.logged_user_details.name}
      <br />
      Department : {context.logged_user_details.department}
    </>
  );
}

export default GrandChildComponentHook;