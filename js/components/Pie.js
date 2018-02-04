import React, { Component } from 'react'
import PieChart from '../charts/PieChart'
export default class Pie extends Component {
  render() {
    let data = [];
    let labelData = [];
    for (let i = 0; i < 24; ++i) {
      data.push({
        value: Math.random() * 10 + 10 - Math.abs(i - 12),
        name: i + ':00'
      });
      labelData.push({
        value: 1,
        name: i + ':00'
      })
    }
    return <PieChart data={data} labelData={labelData} />
  }
}