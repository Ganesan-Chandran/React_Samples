import React from 'react';
import SampleContext from '../SampleContext';

class GrandChildComponent extends React.Component {

  click(setUserDeatils) {
    let logged_user_details = {
      name: 'New Test Name',
      department: 'New Test Department'
    };
    setUserDeatils(logged_user_details);
  }

  render() {
    return (
      <SampleContext.Consumer>
        {context => (
          <>
            <h1> Grand Child component </h1>
            <h4>User Details</h4>
            Name : {context.logged_user_details.name}
            <br />
            Department : {context.logged_user_details.department}
            <br />
            <br />
            <button onClick={() => this.click(context.setUserDeatils)}>Update</button>
          </>
        )}
      </SampleContext.Consumer>
    );
  }
}

export default GrandChildComponent;