import React from "react";
import CategoryRow from './category_row'

class LeftNavBarCategory extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleNumberChange(ShowProduct) {
    console.log(ShowProduct);
    this.props.onChangePage(this.props.products[ShowProduct]);
  }

  render() {
    const rows = [];
    this.props.products.forEach((product, i) => {
      rows.push(
          <CategoryRow
              onNumberChange={this.handleNumberChange}
              product={product}
              index = {i}
              key={product.name}
          />
      );
    });

    return (
      <div style={{float:'left', border: '4px double black', height: '700px', width: '26%', marginLeft:'1%' }}>
        <h1>LeftNavBarCategory</h1>
        <div>
          <ul>
            {rows}
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftNavBarCategory;