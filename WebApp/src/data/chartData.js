const chartData = [
    {
        id: 1,
        type: 'Wildlfire',
        chartType: 'Bar',
        option: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
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
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
              }
            ],
            color : `gray`
          }
    },
    {
        id:2,
        type: 'Earthquake',
        chartType: 'Line',
        option: {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 500],
                type: 'line',
                areaStyle: {}
              }
            ],
            color: 'gray'
        }
    },
    {
        id: 3,
        type: 'Flood',
        chartType: 'Pie',
        option: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Heavy' },
                { value: 735, name: 'Light' },
                { value: 580, name: 'Medium' },
              ]
            }
          ],
          color : ['#fff', '#aaa', '#ddd']
        }
    }
]

export default chartData