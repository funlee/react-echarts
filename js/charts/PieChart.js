import React, { Component } from 'react'
import echarts from 'echarts'
export default class PieChart extends Component {
  constructor(props) {
    super(props)
    this.setOption = this.setOption.bind(this)
    this.initChart = this.initChart.bind(this)
  }
  initChart() {
    const { data, labelData } = this.props
    let myChart = echarts.init(this.refs.chart)
    let options = this.setOption(data, labelData)
    myChart.setOption(options)
  }
  componentDidMount() {
    this.initChart()
  }
  componentDidUpdate() {
    this.initChart()
  }
  render() {
    return (
      <div ref="chart" style={{ width: "100%", height: "100%" }}></div>
    )
  }
  setOption(data, labelData) {
    return {
      title: {
        text: '基础能量消耗',
        left: '50%',
        textAlign: 'center',
        top: '20%'
      },
      color: ['#22C3AA'],
      series: [{
        type: 'pie',
        data: data,
        roseType: 'area',
        itemStyle: {
          normal: {
            color: 'white',
            borderColor: '#22C3AA'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            show: false
          }
        }
      }, {
        type: 'pie',
        data: labelData,
        radius: ['75%', '100%'],
        zlevel: -2,
        itemStyle: {
          normal: {
            color: '#22C3AA',
            borderColor: 'white'
          }
        },
        label: {
          normal: {
            position: 'inside'
          }
        }
      }]
    }
  }
}