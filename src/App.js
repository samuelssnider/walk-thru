import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage'
import CategoriesPage from './components/CategoriesPage'
import ShowPage from './components/ShowPage'
import WTCreate from './components/WTCreate'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.min.js'></script>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.min.js'></script>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/categories" component = {CategoriesPage} />
          <Route path="/walk_thrus/:id" component = {ShowPage} />
          <Route path="/walk_thrus" component = {WTCreate} />
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
