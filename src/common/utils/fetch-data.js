import axios from 'axios';
const FETCH_DATA_STATUS = {
  FETCH_STATUS_CANCEL: 'FETCH_STATUS_CANCEL',
  FETCH_STATUS_ERROR: 'FETCH_STATUS_ERROR'
};

export default class FetchData {
  constructor() {
    this.source = axios.CancelToken.source();
  }

  get(url, param) {
    this.source && this.source.cancel();
    this.source = axios.CancelToken.source();
    param = param || {};
    let queryString = Object.keys(param)
      .map(key => {
        return key + '=' + param[key];
      })
      .join('&');
    queryString && (url = `${url}?${queryString}`);

    return axios
      .get(url, {
        cancelToken: this.source.token
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(FETCH_DATA_STATUS.FETCH_STATUS_CANCEL, url);
        }

        if (error.request) {
          let status = error.request.status.toString();
          if (status.startWith('4') || status.startWith('5')) {
            console.log(FETCH_DATA_STATUS.FETCH_STATUS_ERROR, url);
          }
        }
      });
  }

  post(url, param) {
    this.source && this.source.cancel();
    this.source = axios.CancelToken.source();

    return axios
      .post(url, param, {
        cancelToken: this.source.token
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(FETCH_DATA_STATUS.FETCH_STATUS_CANCEL, url);
        }

        if (error.request) {
          let status = error.request.status.toString();
          if (status.startWith('4') || status.startWith('5')) {
            console.log(FETCH_DATA_STATUS.FETCH_STATUS_ERROR, url);
          }
        }
      });
  }
}
