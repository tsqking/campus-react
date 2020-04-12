import React from 'react';
import FetchData from './common/utils/fetch-data';

export default class App extends React.Component {
  async componentDidMount() {
    let fd = new FetchData();
    let url = 'listUsers';
    let user = await fd.get(url);
    console.log(user);
  }

  render() {
    return (
      <div className='app'>
        <iframe
          title='shen'
          src='//player.bilibili.com/player.html?aid=39807401&cid=70962397&page=1'
          scrolling='no'
          border='0'
          frameborder='no'
          framespacing='0'
          allowfullscreen='true'
        ></iframe>
      </div>
    );
  }
}
