import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './Registration'
import Login from './Login'
import Header from "./header";
import LeftNavBarCategory from "./left_nav_bar_category";
import TopCompany from './top_company'
import ShowCategory from './show_category'
import ShowCompany from './show_company'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

const PRODUCTS = [
    {category: 'Sporting1 Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting2 Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting3 Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics1', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics2', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics3', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 3, product_list: PRODUCTS, showModal: false };
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleHomePage = this.handleHomePage.bind(this);
        this.handleChangeShowModal = this.handleChangeShowModal.bind(this);

    }

    // state = {
    //     page: 3,
    //     product_list: PRODUCTS,
    //     show: false
    // };

    handleChangePage(Product) {
        this.setState({
            page: 1,
            product_list: [Product]
        });
    }

    handleHomePage() {
        this.setState({
            page: 0
        });
    }

    handleChangeShowModal() {
        console.log('1111111111111  handleChangeShowModal', this.state)
        this.setState({
            showModal: true
        });
    }

    render() {
        console.log('App', this.state)
        // const page = (this.state.page === 0) ? <TopCompany /> : (this.state.page === 1) ? <ShowCategory  products={this.state.product_list}/> : <ShowCompany />;
        // const show = (this.state.showModal === true) ? <Registration show = {this.state.showModal} /> : <Registration show = {this.state.showModal} />
        return (
            <div>
                <ul className="topnav">
                    <div className="register" >
                        <li onClick={this.handleChangeShowModal} style = {{color: 'red'}}>registration</li>
                            {this.state.showModal === true ? <Registration show = {true} /> : ''}
                            {/*<Registration show = {this.state.showModal} />*/}
                    </div>
                </ul>

                <div className="App">
                    <header onClick={this.handleHomePage} style={{cursor:'pointer'}}>
                        <Header />
                    </header>
                    <LeftNavBarCategory onChangePage={this.handleChangePage} products={PRODUCTS} />
                </div>
            </div>
        );
    }
}

export default App
