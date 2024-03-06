### Respostas:

#### Questão 1
R: A soma é 91.
<hr>

#### Questão 2
````
// Verificar se é uma sequência de Fibonacci
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
````
<hr>

#### Questão 3
a) 9

b) 128

c) 49

d) 100

e) 13

f) 200
<hr>

#### Questão 4
Como podemos manusear o interruptor diversas vezes, porém executar apenas duas idas às salas
Podemos distinguir os interruptores através do calor das lâmpadas
Para isso, vamos efetuar os seguintes passos:

1. Ligar o primeiro interruptor, aguardar alguns minutos para que a lâmpada se aqueça;
2. Desligar o primeiro interruptor e ligar o segundo interruptor;
3. Entrar na sala após ligar o segundo interruptor.

Nessas duas idas, podemos observar que:
- A lâmpada poderá estar acesa;
- A lâmpada poderá estar apagada e fria;
- A lâmpada poderá estar apagada e quente.

- Caso a lâmpada esteja acesa, o interruptor refere-se ao número 2, pois este ficou ligado;
- Caso a lâmpada esteja apagada e quente, o interruptor refere-se ao número 1, pois esteve ligada por um tempo;
- Caso a lâmpada esteja apagada e fria, o interruptor refere-se ao número 3, pois este não foi acionado e a lâmpada não foi ligada naquele período.
<hr>

#### Questão 5
````
// Inverter uma string
let str = "programacao";
let letra = str.split("");
let newArr = [];

for(let i=letra.length-1; i>=0; i--) {
    newArr.push(letra[i]);
}

console.log(newArr)
````
