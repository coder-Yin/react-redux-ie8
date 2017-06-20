// var $ = require('jquery');
// window.$ = $;

// export function getWebapiHost() {
//     let webapiHost,
//         env = '',
//         host = location.host;

//     if (/^local/i.test(host)) {
//         env = 'localhost:3334'
//     } else if (/^dev/i.test(host)) {
//         env = 'dev/api';
//     }
//     webapiHost = 'http://' + env;
//     return webapiHost;
// }

const getStudentList = () => {
	return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({
                "data": {
                    "list": [
                        {"stuNo": "110801201","stuName":"test","gender":"female"},
                        {"stuNo": "110801226","stuName":"yinxiaofei","gender":"male"}
                    ]
                },
                "message": "success",
                "status": 0
            });
        }, 3000);
    })
};


let models =  {
    getStudentList
};

module.exports = models;