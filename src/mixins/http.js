export default {
    methods: {
        doRequest: function (endpoint) {

            return new Promise((resolve, reject) => {

                let onSuccess = (resp) => {
                    resolve(resp.body);
                };

                let onFail = (errorData) => {
                    reject(errorData);
                };
                const url = 'http://localhost:3000/' + endpoint;
                this.$http.get(url).then(onSuccess, onFail);
            });
        },

        get: function (endpoint) {
            console.log(endpoint);
            return this.doRequest(endpoint);
        },
    }
};
