import React, { Component } from 'react'
import LineAreaChart from '../charts/LineAreaChart'
export default class LineArea extends Component {
  render() {
    const cmData = [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
    const ctData = [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
    const cuData = [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    return <LineAreaChart cmData={cmData} cuData={cuData} ctData={ctData} />
  }
}