import React from 'react';
import './App.css';
import Header from "./header";
import LeftNavBarCategory from "./left_nav_bar_category";
import TopCompany from './top_company'
import ShowCategory from './show_category'
import ShowCompany from './show_company'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 0, product_list: PRODUCTS };
      this.handleChangePage = this.handleChangePage.bind(this);
      this.handleHomePage = this.handleHomePage.bind(this);
  }

  handleChangePage(Product) {
    this.setState({
      page: 1,
      product_list: [Product]
    });
  }

  handleHomePage(number_page) {
    this.setState({
        page: 0
    });
  }

  render() {
    const page = (this.state.page === 0) ? <TopCompany /> : (this.state.page === 1) ? <ShowCategory  products={this.state.product_list}/> : <ShowCompany />;
    return(
      <div className="App">
        <header onClick={this.handleHomePage} style={{cursor:'pointer'}}>
          <Header />
        </header>
        <LeftNavBarCategory onChangePage={this.handleChangePage} products={PRODUCTS} />
        {page}
      </div>
    )
  }
}

const PRODUCTS = [
    {category: 'Sporting1 Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting2 Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting3 Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics1', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics2', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics3', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;
