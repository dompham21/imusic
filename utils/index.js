const crypto = require('crypto');
let request = require("request-promise");
let cookiejar = request.jar();

request = request.defaults({
    gzip: true,
    json: true,
    jar: cookiejar
  });


exports.isEmpty = function (obj) {
    return Object.keys(obj).length === 0;
};

const getHash256 = (a) => {
    return crypto.createHash('sha256').update(a).digest('hex');
}

const getHmac512 = (str,key) => {
    let hmac = crypto.createHmac('sha512', key);
    return hmac.update(Buffer.from(str,'utf-8')).digest('hex');
}

const hashParam = (nameAPI,time,params = '',count='') => {
    console.log(count)
    const hash256 = getHash256(`${count}ctime=${time}${params}version=${process.env.API_VERSION}`);

    return getHmac512(nameAPI + hash256,process.env.SERCRET_KEY);
}
const getCookie = async () => {
    if (!cookiejar._jar.store.idx['zingmp3.vn']) {
        await request.get('https://zingmp3.vn/');
    }
}
exports.requestAPI = async (nameAPI,qs,param,count) => {
    await getCookie();

    let time = Math.floor(Date.now() / 1000);
    let sig  = hashParam(nameAPI,time,param,count)
 
    return request({
        uri: process.env.API_URL + nameAPI,
        qs: {
            ...qs,
            ctime: time,
            version: process.env.API_VERSION,
            sig: sig,
            apiKey: process.env.API_KEY
        },
    });
}