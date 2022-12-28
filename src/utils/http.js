import qs from "qs";
import axios from "axios";





axios.defaults.timeout = 100000;
axios.defaults.retry = 0;
axios.defaults.retryDelay = 500;

axios.interceptors.request.use(
  function(config) {
    if (process.client) {
      const { token } = window.$nuxt.$store.state;
      if (token) {
        config.headers.authorization = token;
        return config;
      }
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    
    const data = response.data;
    switch (data.code) {
      case 401:
        return response;
      case 500:
        return response;
      default:
        return response;
    }
  },
  function axiosRetryInterceptor(err) {
    const status = err && err.request && err.request.status;
    switch (status) {
      default:
        var config = err.config;
        if (config.method == "post") {
          break;
        }
        // If config does not exist or the retry option is not set, reject
        if (!config || !config.retry) {
          return Promise.reject(err);
        }
        // Set the variable for keeping track of the retry count
        //???
        config.__retryCount = config.__retryCount || 0;
        // Check if we've maxed out the total number of retries
        if (config.__retryCount >= config.retry) {
          // Reject with the error
          return Promise.reject(err);
        }
        // Increase the retry count
        config.__retryCount += 1;
        // Create new promise to handle exponential backoff
        var backoff = new Promise(function(resolve) {
          setTimeout(function() {
            resolve();
          }, config.retryDelay || 1);
        });
        // Return the promise in which recalls axios to retry the request
        return backoff
          .then(function() {
            return axios(config);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }.bind(this)
);

function http(obj) {
  return new Promise((resolve, reject) => {
    if (obj.method) {
      obj.method = obj.method.toLowerCase();
    } else {
      obj.method = "get";
    }

    if (obj.method == "post" && obj.data) {
      if (
        !obj.headers ||
        !obj.headers["Content-Type"] ||
        obj.headers["Content-Type"] != "multipart/form-data;charset=UTF-8"
      ) {
        obj.data = qs.parse(obj.data);
      }
    } else {
      obj.data = {};
    }

    if (obj.method != "get" || !obj.params) {
      obj.params = {};
    }

    let param_obj = {
      ...obj,
      method: obj.method,
      url: obj.url,
      data: obj.data,
      params: obj.params
    };
  
   
    if (obj.headers && Object.keys(obj.headers).length > 0) {
      param_obj = {
        ...param_obj,
        headers: obj.headers
      };
    }
    axios(param_obj)
      .then(response => {
        resolve(response);
      })
      .catch(function(error) {
      
        reject(error);
      });
  }).catch(e => {
    console.log(e);
  });
}

export default http;
