

export const converMinToSecond = (time) => {
    let str = time.split(":");
    return +str[0]*60 + +str[1];
}   

export const resizeImg = (url,width,ratio) => {
    let arr = url.split('/')
    arr[3] = `w${width}_r${ratio}_jpeg`
    return arr.join('/');
}

export function truncate(str,length){
    return str.length>length+1 ? str.substr(0,length) + '...' : str;
}