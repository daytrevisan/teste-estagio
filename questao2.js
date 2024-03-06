let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21];
let pertence = 0;

for(let i = 0; i < arr.length; i++) {

    if(arr[i] + arr[i+1] === arr[i+2]) {
        pertence++;
    }
}

if(pertence === arr.length-2) {
    console.log("É uma sequência de Fibonacci")
} else {
    console.log("Não é uma sequência de Fibonacci")
}