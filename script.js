
const d1 = [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 22.8, 17.5, 12.1, 7.6]
const d2 = [1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
const rand = 0
const limit = 100
/*const coroa = []
const cara = []*/

const cara = new Array(limit).fill(0)
const coroa = new Array(limit).fill(0)

function getRandomInt(min, max) {
    min = Math.ceil(min);    // Arredonda para cima para garantir que min seja inclusivo
    max = Math.floor(max);   // Arredonda para baixo para garantir que max seja exclusivo
    return Math.floor(Math.random() * (max - min)) + min;
}
  
// Exemplo de uso:
let numeroAleatorio;
console.log(numeroAleatorio);  // Exibe o número aleatório gerado no console
  
for(i = 0; i<=limit; i++){
    // console.log(i);
    numeroAleatorio = getRandomInt(1, 10);  // Gera um número aleatório entre 1 e 100
    if(numeroAleatorio %2==0){
        numeroAleatorio = getRandomInt(1, 10);  // Gera um número aleatório entre 1 e 100
        if(numeroAleatorio %2==0){
            cara[i] = 1
        }else{
            coroa[i] = 1
        }
    }else{
        coroa[i] = 1
    }

}

//console.log(cara.reduce((total, valor) => total + valor, 0));
//console.log(coroa.reduce((total, valor) => total + valor, 0));
// fun('container', cara, coroa)

const limit2 = 10;  // Número de lançamentos desejado

const resultado1 = new Array(100).fill(0);
const resultado2 = new Array(limit).fill(0);
const prob = 2;
for (let i = 0; i < limit; i++) {
    const resNum = getRandomInt(1,100);
    if(resNum <=prob){
        resultado1[i] = 1
    }else{
        resultado2[i] = 1
    }
}
const res1Reduce = resultado1.reduce((total, valor) => total + valor, 0);
const res2Reduce = resultado2.reduce((total, valor) => total + valor, 0);
console.log('Res 1: ' + res1Reduce);
console.log('Res 2: ' + res2Reduce);

const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const squares = document.querySelectorAll("span");
console.log(squares);
const content = [[],[]]
const write = ()=>{    
    squares.forEach((square)=>{
        const getRandom = getRandomInt(1,200);
        if(getRandom <= 30){
            // const img = document.createElement('img')
            // img.setAttribute('src' ,`https://images.educamaisbrasil.com.br/content/banco_de_imagens/eb/D/tigre-indochina.jpg`)
            // img.setAttribute('width', '100px')

            // square.innerHTML = ''
            // square.appendChild(img)
            square.innerHTML = 'X';
            console.log('opa');
        }else if(getRandom > 30 && getRandom <=60){
            square.innerHTML = 'O';
        }
        else if(getRandom > 60 && getRandom <=90){
            square.innerHTML = 'U'
        }else if(getRandom<=100){
            square.innerHTML = 'Y';
        }
        else{
            square.innerHTML = '1'
        }
    })
   if(line1.children[0].innerHTML !== '1' && line1.children[0].innerHTML === line1.children[1].innerHTML && line1.children[2].innerHTML === line1.children[0].innerHTML){
    alert('ganhou ebaa')
   }
   if(line2.children[0].innerHTML !== '1' && line2.children[0].innerHTML === line2.children[1].innerHTML && line2.children[2].innerHTML === line2.children[0].innerHTML){
    alert('ganhou ebaa')
   }
   if(line3.children[0].innerHTML !== '1' && line3.children[0].innerHTML === line3.children[1].innerHTML && line3.children[2].innerHTML === line3.children[0].innerHTML){
    alert('ganhou ebaa')
   }
   if(line1.children[0].innerHTML !== '1' && line1.children[0].innerHTML === line2.children[1].innerHTML && line3.children[2].innerHTML === line1.children[0].innerHTML){
    alert('ganhou ebaa')
   }
   if(line3.children[0].innerHTML !== '1' && line1.children[2].innerHTML === line2.children[1].innerHTML && line2.children[1].innerHTML === line3.children[0].innerHTML){
    alert('ganhou ebaa')
   }
} 
// let count = 0;
console.log(line1.children);
const sort = document.querySelector("#sort")

sort.addEventListener("click", write)
//fun('graph2', resultado1, resultado2)