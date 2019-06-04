import React, { Component } from 'react';
import Sankey from '../charts/Sankey';
import '../stylesheets/style.css';

export default class RoadMapFlow extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('/api/select-all')
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