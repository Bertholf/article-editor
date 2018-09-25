import axios from 'axios';

export default {
    methods: {
        doRequest: function (endpoint) {

            return new Promise((resolve, reject) => {

                let onSuccess = (resp) => {
                    resolve(resp.data);
                };

                let onFail = (errorData) => {
                    reject(errorData);
                };
                const url = 'http://localhost:3000/' + endpoint;
                axios.get(url).then(onSuccess, onFail);
            });
        },

        get: function (endpoint) {
            return this.doRequest(endpoint);
        },
    }
};
