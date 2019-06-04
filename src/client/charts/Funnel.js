import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/funnel';
import { FUNNEL_TITLE, FUNNEL_SUB_TITLE, FUNNEL_NAME } from '../constant/Constants';

export default class Funnel {
  static init(dom, data) {
    this.myChart = echarts.init(dom);
    const funnelData = Funnel.map(data);
    const option = {
      title: {
        text: FUNNEL_TITLE,
        subtext: FUNNEL_SUB_TITLE
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['展现','点击','访问','咨询','订单']
      },
      calculable: true,
      series: [
        {
          name: FUNNEL_NAME,
          type: 'funnel',
          left: '10%',
          top: 60,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside'
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data: [
            {value: 60, name: '访问'},
            {value: 40, name: '咨询'},
            {value: 20, name: '订单'},
            {value: 80, name: '点击'},
            {value: 100, name: '展现'}
          ]
        }
      ]
    };

    this.myChart.setOption(option);
  }

  static map(data) {
    return {

    }
  }
};
