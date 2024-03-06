let str = "programacao";
let letra = str.split("");
let newArr = [];

for(let i=letra.length-1; i>=0; i--) {
    newArr.push(letra[i]);
}

console.log(newArr)