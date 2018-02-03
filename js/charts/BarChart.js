/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-02-03 22:38:26
 * @Last Modified time: 2018-02-03 22:38:26
 * @Description: 柱状图 组件 
 */
import React, { Component} from 'react'
import echarts from 'echarts'

export default class BarChart extends Component {

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
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '测试数据',
          type: 'bar',
          barWidth: '60%',
          data: data
        }
      ]
    }
  }
}