//setinterval
const int=setInterval(()=>{
    console.log('in the console');
},1000)
setTimeout(()=>{
    clearInterval(int)
    console.log('wow');
},3000)
const greet= name=>console.log(`${name}`);
greet("ahad")

console.log(__dirname);
console.log(__filename);