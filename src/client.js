import axios from 'axios';

export default {
  methods: {
    doRequest(endpoint) {
      return new Promise((resolve, reject) => {
        const onSuccess = (resp) => {
          resolve(resp.data);
        };

        const onFail = (errorData) => {
          reject(errorData);
        };
        const url = `http://localhost:3000/${endpoint}`;
        axios.get(url).then(onSuccess, onFail);
      });
    },

    get(endpoint) {
      return this.doRequest(endpoint);
    },
  },
};
