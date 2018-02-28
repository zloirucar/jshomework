

var fs=require('fs');

var _=require('lodash')

var text=fs.readFileSync('zdf-win.txt','utf8');

var words=text.split(/\r?\n/);

var enteredWord = 'кораблестроение';





var testWord = (function(){
    var s = _.reduce(enteredWord,(a,x)=>(a[x]=(a[x]||0)+1,a),{})
    return function (word){
    var result = _.transform(
        word,
        (a,x)=> {a[x]>0? --a[x]:(a.failed = true, false)},
        _.clone(s))
    return !result.failed }
    })


console.log(testWord)