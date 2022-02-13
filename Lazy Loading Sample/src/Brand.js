import React from 'react';

class Brand extends React.Component {
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
      <div style={{ backgroundColor: "#fbff8c", padding: "10px" }}>
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

export default Brand;