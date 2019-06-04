import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/sankey';

export default class Sankey {
  static init(dom, data) {
    this.myChart = echarts.init(dom);
    const sankeyData = Sankey.map(data);

    this.myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'sankey',
          data: sankeyData.nodes,
          links: sankeyData.links,
          focusNodeAdjacency: 'allEdges',
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#aaa'
            }
          },
          lineStyle: {
            normal: {
              color: 'source',
              curveness: 0.5
            }
          }
        }
      ]
    });
  }

  /**
   * data format:
   * [ {
   *   currentAmount: 10000,
   *   currentPage: home,
   *   id: 1,
   *   toAmount: 2000,
   *   toPage: sdp
   * }]
   * @param data
   *
   * sankey:
   * {
   *   nodes: [{
   *     name: home
   *   },{
   *     name: sdp
   *   }],
   *   links: [
   *     {
   *       source: home,
   *       target: sdp,
   *       value:
   *     }
   *   ]
   * }
   */
  static map(data) {
    const sources = data.map(o => o.currentPage);
    const targets = data.map(o => o.toPage);
    const nodes = Array.from(new Set([...sources.concat(targets)])).map(c => ({
      name: c
    }));

    const links = data.map(o => ({
      source: o.currentPage,
      target: o.toPage,
      value: o.toAmount
    }));

    return {
      nodes: [...Array.from(new Set(nodes))],
      links: [...links]
    };
  }
}
