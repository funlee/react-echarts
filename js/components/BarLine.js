import React, { Component } from 'react'
import BarLineChart from '../charts/BarLineChart'
export default class BarLine extends Component {
  render() {
    let category = [];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];

    for (let i = 0; i < 20; i++) {
      let date = new Date(dottedBase += 1000 * 3600 * 24);
      category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      ].join('-'));
      const b = Math.random() * 200;
      const d = Math.random() * 200;
      barData.push(b)
      lineData.push(d + b);
    }
    return <BarLineChart category={category} lineData={lineData} barData={barData} />
  }
}