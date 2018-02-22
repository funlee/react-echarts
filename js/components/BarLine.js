import React,{ Component } from 'react'
import PropTypes from 'prop-types'

import BarLineChart from '../charts/BarLineChart'

class BarLine extends Component {
  constructor(props) {
    super(props)
    this.state={
      category:[],
      lineData:[],
      barData:[]
    }
  }
  componentWillMount() {
    this.getData()
  }
  componentDidMount() {
    setInterval(() => {
      this.getData()
    },5000)
  }
  getData() {
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
    this.setState({
      category: category,
      barData: barData,
      lineData: lineData
    })
  }
  render() {
    const { category, lineData, barData} = this.state
    return <BarLineChart category={category} lineData={lineData} barData={barData} />
  }
}

export default BarLine
