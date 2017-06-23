import superagent from 'superagent';
import URL from 'url';
// import config from '../config';

export default class ApiClient {

  constructor() {
    ['get', 'post', 'put', 'patch', 'del'].forEach(method => {
      this[method] = (path, options) =>
        new Promise((resolve, reject) => {
          const url = this.formatUrl('config.apiUrl', path);
          const request = this.getRequestOptions(url, method, options);

          request.end((err, { body } = {}) => {
            if (err) {
              reject(body || err);
            } else {
              resolve(body);
            }
          });
        });
    });
  }

  getRequestOptions(url, method, options) {
    const request = superagent[method](url);

    if (options && options.params) {
      request.query(options.params);
    }

    if (this.headers) {
      request.set(this.headers);
    }

    if (options && options.data) {
      request.send(options.data);
    }

    return request;
  }

  formatUrl(apiUrl, path) {
    const url = path[0] === '/' ? path.substring(1) : path;
    return URL.resolve(apiUrl, url);
  }

  clearHeaders() {
    this.headers = null;
  }

  setExtraHeaders(headers) {
    this.headers = {
      ...headers,
    };
  }
}
