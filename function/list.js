const pessoas = [
    { nome: 'João das Pedras', idade: 23 },
    { nome: 'Manoel Silva', idade: 35 },
    { nome: 'Carla Gomes', idade: 22 },
    { nome: 'Brenda Eich', idade: 19 },
    { nome: 'Stevis Jobs', idade: 30 },
    { nome: 'Isabel Uébi', idade: 24 }
];

for(let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].nome);
}

console.log('Executando o forEach:');
pessoas.forEach(item => console.log(item));

const pessoa = pessoas.find(item => item.nome === 'João das Pedras');
console.log('Pessoa encontrada => ', pessoa.nome);


pessoasFiltradas = pessoas.filter(item => item.idade > 90);
console.log('Pessoas filtradas => ', pessoasFiltradas);


const novaLista = pessoas.map(item => {
 return `Meu nome é ${item.nome} e eu tenho ${item.idade} anos de idade`;
});

console.log('Nova lista => ', novaLista);