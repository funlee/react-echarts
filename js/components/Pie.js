import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PieChart from '../charts/PieChart'

class Pie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      labelData: []
    }
  }
  componentWillMount() {
    this.getData()
  }
  componentDidMount() {
    setInterval(() => {
      this.getData()
    }, 5000)
  }
  getData() {
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
    this.setState({
      data: data,
      labelData: labelData
    })
  }
  render() {
    const { data, labelData } = this.state
    return <PieChart data={data} labelData={labelData} />
  }
}

export default Pie
