import Counter2 from "./components/Counter2";
import Counter1 from "./components/Counter1";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let count = this.state.count2;
    this.setState({ count2: count + 1 });
  }

  render() {
    return (
      <>
        <Counter1 Count={this.state.count1} />
        <br />
        <Counter2 Count={this.state.count2} />
        <br />
        <button onClick={this.onClick}>Increment</button>
      </>
    );
  }
}

export default App;
