import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'
import CategoriesPage from './components/CategoriesPage'
import ShowPage from './components/ShowPage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/categories" component = {CategoriesPage} />
          <Route path="/walk_thrus/:id" component = {ShowPage} />
        </Switch>
      </Router>
    );
  }
}

// <Switch>
//   <Route exact path='/' component={Home}/>
//   {/* both /roster and /roster/:number begin with /roster */}
//   <Route path='/roster' component={Roster}/>
//   <Route path='/schedule' component={Schedule}/>
// </Switch>
  
export default App;
