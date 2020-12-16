import crypto from 'crypto';

const API_KEY = '38e8643fb0dc04e8d65b99994d3dafff';
const SERCRET_KEY = '10a01dcf33762d3a204cb96429918ff6';

export const converMinToSecond = (time) => {
    let str = time.split(":");
    return +str[0]*60 + +str[1];
}            


const getHash256 = (a) => {
    return crypto.createHash('sha256').update(a).digest('hex');
}

const getHmac512 = (str,key) => {
    let hmac = crypto.createHmac('sha512', key);
    return hmac.update(Buffer.from(str,'utf-8')).digest('hex');
}

export const hashParam = (nameAPI,SERCRET_KEY,time) => {
    const hash256 = getHash256(`ctime=${time}`);

    return getHmac512(nameAPI + hash256,SERCRET_KEY);
}