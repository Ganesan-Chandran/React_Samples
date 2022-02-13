import React from 'react'

export default function SearchHOCFunction(OriginalComponent, data) {
  class HOCClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchData: "",
      };
      this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e) {
      let searchItem = [];
      data.forEach(item => {
        if (item.toUpperCase().includes(e.target.value.toUpperCase())) {
          searchItem.push(item);
        }
      });

      this.setState({
        searchData: searchItem
      });
    }

    render() {
      return (
        <div style={{ backgroundColor: "#74f795", padding: "10px" }}>
          Search : <input type="text" onChange={this.changeValue}></input>
          <br/>
          <br/>
          <OriginalComponent {...this.props} searchData={this.state.searchData} />
          <br />
        </div>
      );
    }
  }
  return HOCClass
}