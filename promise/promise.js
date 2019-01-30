//http://localhost:3000/api/lista

//http://localhost:3000/api/empresta-cinco-pilao


// fetch('http://localhost:3000/api/lista')
    // .then(res => res.json())
    // .then(resposta => {
        // console.log(resposta);
    // });

fetch('http://localhost:3000/api/empresta-cinco-pilao')
.then(res => res.text())
.then(emprestou => {
    console.log(emprestou);
})
.catch(naoEmprestou => {
    console.log(naoEmprestou);
})

