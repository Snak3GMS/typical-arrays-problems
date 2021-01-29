
exports.min = function min (arr){
    return (arr || arguments.length)? arr.length ? Math.min(...arr) : 0 : 0 ;
}

exports.max = function max(arr){
    return (arr || arguments.length) ? arr.length ? Math.max(...arr) : 0 : 0;
}


exports.avg = function avg (arr){
    return (arr || arguments.length) ? arr.length ? arr.reduce((a,b)=>a+b) / arr.length : 0 : 0;
}

