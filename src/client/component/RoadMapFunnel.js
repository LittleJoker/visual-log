import React, { Component } from 'react';
import Sankey from '../charts/Funnel';
import '../stylesheets/style.css';
import { SQL_SELECT_PC_FUNNEL } from '../constant/Query';

export default class RoadMapFlow extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('/api/query', {
      method: 'POST',
      body: {
        data: {
          sql: SQL_SELECT_PC_FUNNEL
        }
      }
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({data});
        Sankey.init(document.getElementById('funnel'), [...data]);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.length ? <div id={'funnel'} style={{maxHeight: 600, overFlow: 'auto'}}/> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}