import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RoadMapFlow from './component/RoadMapFlow';
import RoadMapFunnel from './component/RoadMapFunnel';
import Main from './component/Main';
import { PLATFORM_TITLE, ROAD_MAP_FUNNEL_LINK, ROAD_MAP_SANKEY_LINK } from './constant/Constants';
// import Header from './component/Header';
const { Header } = Layout;

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header className={'header'}>
            {PLATFORM_TITLE}
          </Header>
          <Main>
            <Route path={ROAD_MAP_SANKEY_LINK} component={RoadMapFlow} />
            <Route path={ROAD_MAP_FUNNEL_LINK} component={RoadMapFunnel} />
          </Main>
        </Router>
      </div>
    )
  }
}
