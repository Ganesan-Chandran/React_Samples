import React from 'react';
import Product from "./Product";

const BrandComponent = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Brand")), 5000)
    )
);

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Product />
        </div>
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            <BrandComponent />
          </React.Suspense>
        </div>
      </div>
    )
  }
}

export default Layout;