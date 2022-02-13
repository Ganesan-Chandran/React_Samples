import React from 'react';
import SearchHOCFunction from "./HOC";

var BrandData = [
  "Samsung",
  "LG ",
  "OnePlus",
  "Apple",
  "Microsoft"
]

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.setState({
      data: BrandData
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {  
    this.setState({
      data: nextProps.searchData
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#d7b3e6", padding: "10px" }}>
        <h1>Brand</h1>
        {this.state.data.length > 0 ?
          <ul>
            {this.state.data.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
          :
          ""
        }
      </div>
    )
  }
}

Brand = SearchHOCFunction(Brand, BrandData);
export default Brand;