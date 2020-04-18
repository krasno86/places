import React from "react";
import CompanyRow from './company_row'

class ShowCategory extends React.Component {

  render() {
    const rows = [];

    this.props.products.forEach((product, i) => {

      rows.push(
          <CompanyRow
              // onClickProduct={this.handleClickProduct}
              product={product}
              index = {i}
              key={product.name}
          />
      );
    });

    return (
      <div style={{float:'left', border: '4px double black', height: '700px', width: '70%', marginLeft:'1%' }}>
        <h1>Show Companies</h1>
        {rows}
      </div>
    );
  }
}

export default ShowCategory;