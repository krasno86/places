import React from 'react';
import './App.css';
import Registration from './Registration'
import Login from './Login'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h2>Main menu</h2>
            <div><NavLink activeStyle = {{color: 'red'}} to='/home'>HOME</NavLink></div>
            <div><NavLink activeStyle = {{color: 'red'}} to='/registration'>registration</NavLink></div>
            <div><NavLink activeStyle = {{color: 'red'}} to='/login'>log in</NavLink></div>
          </div>
          <div className="root">
            <Route path = '/registration' component = {Registration}/>
            <Route path = '/login' component = {Login}/>
            <Route path = '/#' component = {App}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
