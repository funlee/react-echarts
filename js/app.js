import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import '../css/style.scss'

import Home from './components/Home'
import BarLine from './components/BarLine'
import LineArea from './components/LineArea'
import Pie from './components/Pie'
import Map from './components/Map'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <span><NavLink to="/">Home</NavLink></span>
            <span><NavLink to="/bar-line">Bar And Line Charts</NavLink></span>
            <span><NavLink to="/line-area">Line And Area Charts</NavLink></span>
            <span><NavLink to="/pie">Pie Charts</NavLink></span>
            <span><NavLink to="/map">Map Charts</NavLink></span>
          </nav>
          <div className="charts-wrap">
            <Route exact path="/" component={ Home } />
            <Route path="/bar-line" component={ BarLine } />
            <Route path="/line-area" component={ LineArea } />
            <Route path="/pie" component={ Pie } />
            <Route path="/map" component={ Map } />
          </div>          
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
