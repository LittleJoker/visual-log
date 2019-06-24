import React, { Component } from 'react';
import Sankey from '../charts/Sankey';
import '../stylesheets/style.css';
import { SQL_SELECT_ALL } from '../constant/Query';

export default class RoadMapFlow extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const data = {
      sql: SQL_SELECT_ALL
    };

    fetch('/api/query', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({data});
      Sankey.init(document.getElementById('sankey'), [...data]);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.length ? <div id={'sankey'} style={{maxHeight: 600, overFlow: 'auto'}}/> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}