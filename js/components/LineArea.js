import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LineAreaChart from '../charts/LineAreaChart'

class LineArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: [],
      lineData: [],
      barData: []
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
    let cmData = []
    let ctData = []
    let cuData = []
    for(let i = 0;i < 12;i++) {
      cmData.push(parseInt(Math.random() * 200, 10))
      ctData.push(parseInt(Math.random() * 200, 10))
      cuData.push(parseInt(Math.random() * 200, 10))
    }
    this.setState({
      cmData: cmData,
      cuData: cuData,
      ctData: ctData
    })
  }
  render() {
    const { cmData, cuData, ctData } = this.state
    return <LineAreaChart cmData={cmData} cuData={cuData} ctData={ctData} />
  }
}

export default LineArea
