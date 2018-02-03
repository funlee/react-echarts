import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../css/style.scss'

import Bar from './components/Bar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/bar">Bar Charts</Link></span>
            <span><Link to="/line">Line Charts</Link></span>
          </nav>
          <div className="charts-wrap">
            {/* <Route exact path="/" component={ Home } /> */}
            <Route path="/bar" component={ Bar } />
            {/* <Route path="/line" component={ Line } /> */}
          </div>          
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
