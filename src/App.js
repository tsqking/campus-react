import React from 'react';
import FetchData from './common/utils/fetch-data';

export default class App extends React.Component {

  async componentDidMount(){
    let fd = new FetchData();
    let url = 'listUsers'
    let user = await fd.get(url);
    console.log(user);
  }

  render() {
    return <div className='app'></div>;
  }
}
