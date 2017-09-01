import superagent from 'superagent';
import URL from 'url';
import config from '../config';

interface SuperagentOptions {
  params?: object,
  headers?: object,
  data?: object | string;
}

type RestClientResponse = Promise<any | Error>;

export default class ApiClient {
  private headers;

  constructor() {
    ['get', 'post', 'put', 'patch', 'del'].forEach(method => {
      this[method] = (path, options) =>
        new Promise((resolve, reject) => {
          const url = this.formatUrl(config.apiUrl, path);
          const request = this.getRequestOptions(url, method, options);

          request.end((err, { body } = { body: undefined }) => {
            if (err) {
              reject(body || err);
            } else {
              resolve(body);
            }
          });
        });
    });

  }

  private getRequestOptions(url, method, options) {
    const request = superagent[method](url);

    if (options && options.params) {
      request.query(options.params);
    }

    if (this.headers) {
      request.set(this.headers);
    }

    if (options && options.headers) {
      request.set(options.headers);
    }

    if (options && options.data) {
      request.send(options.data);
    }

    return request;
  }

  private formatUrl(apiUrl: string, path: string) {
    const url = path[0] === '/' ? path.substring(1) : path;
    return URL.resolve(apiUrl, url);
  }

  clearHeaders() {
    this.headers = null;
  }

  setExtraHeaders(headers: object) {
    this.headers = {
      ...headers,
    };
  }

  get(path: string, options?: SuperagentOptions): RestClientResponse { return <RestClientResponse>{}; }
  post(path: string, options?: SuperagentOptions): RestClientResponse { return <RestClientResponse>{}; }
  put(path: string, options?: SuperagentOptions): RestClientResponse { return <RestClientResponse>{}; }
  patch(path: string, options?: SuperagentOptions): RestClientResponse { return <RestClientResponse>{}; }
  del(path: string, options?: SuperagentOptions): RestClientResponse { return <RestClientResponse>{}; }
}
