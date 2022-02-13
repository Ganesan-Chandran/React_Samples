import React from 'react';
import SampleContext from './SampleContext';

class SampleProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_user_details: {
        name: 'Test Name',
        department: 'Test Department'
      }
    }

    this.setUserDeatils = this.setUserDeatils.bind(this);
  };

  // Method to update state
  setUserDeatils(userDeatils) {
    this.setState({ logged_user_details: userDeatils });
  }

  render() {
    return (
      <SampleContext.Provider
        value={{ logged_user_details: this.state.logged_user_details, setUserDeatils: this.setUserDeatils }}>
        {this.props.children}
      </SampleContext.Provider>
    );
  }
}

export default SampleProvider;

