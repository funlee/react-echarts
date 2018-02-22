import React, { Component } from 'react'
import echarts from 'echarts'
import china from './china'
export default class PieChart extends Component {
  constructor(props) {
    super(props)
    this.setOption = this.setOption.bind(this)
    this.initChart = this.initChart.bind(this)
  }
  initChart() {
    const { data } = this.props
    let myChart = echarts.init(this.refs.chart)
    let options = this.setOption(data)
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
  setOption(data) {
    return {
      title: {
        text: '全国主要城市空气质量',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      visualMap: {
        min: 0,
        max: 500,
        splitNumber: 5,
        inRange: {
          color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
        },
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [{
        name: 'AQI',
        type: 'heatmap',
        coordinateSystem: 'geo',
        data: data
      }]
    };
  }
}
