import React, { Component } from 'react'
import BarChart from '../charts/BarChart'
export default class Bar extends Component {
  render() {
    const data = [10, 52, 200, 334, 390, 330, 220]    
    return <BarChart data={ data } />
  }
}