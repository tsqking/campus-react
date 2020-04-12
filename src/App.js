import React from 'react';
import FetchData from './common/utils/fetch-data';

export default class App extends React.Component {
  async componentDidMount() {
    const fd = new FetchData();
    const url = 'listUsers';
    const r = await fd.get(url);
    const users = r && r.data;
    console.log(JSON.stringify(users));
  }

  render() {
    return <div className='app'></div>;
  }
}
