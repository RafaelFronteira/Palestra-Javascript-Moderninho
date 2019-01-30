var nome = "Rafael";
console.log('Var nome => ', nome);


function mostraNome() {
    var nome = "Rafael";
    console.log('Var nome dentro da função => ', nome);
}

// vai gerar erro pois a var nome só existe dentro da função
// console.log('Var nome fora da função', nome); 
mostraNome();

if (true) {
    var nome = "Rafael";
    console.log('Var nome dentro do if => ', nome);
}

// não vai gerar um erro pois a var nome escapou do escopo do if
console.log('Var nome fora do if =>', nome);

if (true) {
    let nome = "Rafael";
    console.log('let nome dentro do if => ', nome);
}

// vai gerar um erro pois a let nome só existe dentro do escopo do if
// console.log('let nome fora do if =>', nome);


for(var i = 0; i < 5; i++) {
    console.log('var i dentro do for => ', i);
}

// não vai gerar um erro pois a var i escapou do escopo do for
console.log('var fora do for => ', i);


for(let i = 0; i < 5; i++) {
    console.log('let i dentro do for => ', i);
}

// vai gerar um erro pois a let i só existe dentro do escopo do for
// console.log('let i fora do for => ', i);

const idade = 23;
console.log(idade);
idade = 50;
console.log(idade);


