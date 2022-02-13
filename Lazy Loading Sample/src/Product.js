import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "TV",
        "Mobile",
        "Laptop",
        "Headphone",
        "Desktop"
      ]
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#c9d1ce", padding: "10px" }}>
        <h1>Product</h1>
        <ul>
          {this.state.data.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Product;