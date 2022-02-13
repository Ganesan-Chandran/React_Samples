import React from 'react';
import SearchHOCFunction from "./HOC";

var ProductData = [
  "TV",
  "Mobile",
  "Laptop",
  "Headphone",
  "Desktop"
]

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.setState({
      data: ProductData
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {  
    this.setState({
      data: nextProps.searchData
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#c9d1ce", padding: "10px" }}>
        <h1>Product</h1>
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

Product = SearchHOCFunction(Product, ProductData);
export default Product;