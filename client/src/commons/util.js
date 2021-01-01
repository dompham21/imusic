

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

export function getPercent(obj){
    let arr1 = [],arr2 = [],arr3 = [],result = [];

    let arr = Object.values(obj).map(i => i.map(j => j.counter));

    let arrIdx = arr.map(i => i.indexOf(Math.max(...i))) //get Idx values max of each array 

    arr.map((i) => {
        arr1.push(i[arrIdx[0]]);
        arr2.push(i[arrIdx[1]]);
        arr3.push(i[arrIdx[2]]); 
    })  //get values 

    result.push(arr1,arr2,arr3);

    return result.map((i,index) => {
       return Math.floor((i[index]/i.reduce((a,b)=> a+b,0))*100 + 0.5)
    }) //convert to percent
}