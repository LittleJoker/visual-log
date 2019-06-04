import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { MENU_ITEM_ROAD_MAP_SANKEY, MENU_ITEM_ROAD_FUNNEL, ROAD_MAP_SANKEY_LINK, ROAD_MAP_FUNNEL_LINK } from '../constant/Constants';


export default class Main extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <div className={'side-bar'}>
          <Menu
            style={{ width: 256, minHeight: 600 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
              <Menu.Item key="1"><Link to={ROAD_MAP_SANKEY_LINK}>{MENU_ITEM_ROAD_MAP_SANKEY}</Link></Menu.Item>
              <Menu.Item key="2"><Link to={ROAD_MAP_FUNNEL_LINK}>{MENU_ITEM_ROAD_FUNNEL}</Link></Menu.Item>
          </Menu>
        </div>

        <div className={'main-panel'} style={{flex: 1}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
