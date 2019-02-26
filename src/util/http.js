import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

let token = window.localStorage.getItem("token");

axios.defaults.headers.common['Authorization'] = !token ? "eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI5OTk5OTk5OTkiLCJzdWIiOiJ7XCJpZFwiOiA5OTk5OTk5OTksXCJ1c2VySWRcIjogOTk5OTk5OTk5LFwibmFtZVwiOiBcIuW8gOWPkeS6uuWRmOa1i-ivlei0puWPt1wiIH0iLCJpYXQiOjE1Mjk0ODk2NTUsImp0aSI6Ijk5OTk5OTk5OSJ9.ktDwazqyHuk-gjnPuvV5i68S7xc2FVpL68kAAdijeUQ" : token;

export default {
    ajax(obj = {}) {
        if (obj.baseURL) {
            axios.defaults.baseURL = '/' + obj.baseURL + '/';
        } else {
            axios.defaults.baseURL = '/dr-web/';
        }
        obj.param = !obj.param ? {} : obj.param;
        axios({
            method: !obj.method ? 'post' : obj.method,
            url: obj.url,
            responseType: !obj.resType ? 'json' : obj.resType,
            data: JSON.stringify(obj.param)
        }).then((res) => {
            if (obj.resType && obj.resType == 'arraybuffer') {
                obj.callback && obj.callback(res.data);
            } else {
                if (res.data.code !== 1) {
                    Message.warning(res.data.msg);
                    obj.fail && obj.fail(res.data);
                    return;
                }
                obj.callback && obj.callback(res.data.data);
            }
        }).catch((error) => {
            obj.error && obj.error(error);
            console.log(error);
        });
    },
    all(fnArray, callback) {
        return axios.all(fnArray)
            .then(axios.spread(function(acct, perms) {
                // Both requests are now complete
                callback(acct, perms);
            }));
    }
}
