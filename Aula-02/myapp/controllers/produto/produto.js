let fs = require('fs');
let produtos = fs.readFileSync('controllers/produto/produtos.json').toString();

function listar(){
    return produtos;
}
function criar(produto){
    let produtos = JSON.parse(listar());
    console.log(typeof produtos);
    produtos.push(produto);
    return produtos;
}
function atualizar(){
    return 'Atulizar produto'
}
function deletar(produto_id){
    let filtrados = produtos.filter((prod)=> prod.id != produto_id);
    return JSON.stringify(filtrados);
}
module.exports ={
    listar,
    criar,
    atualizar,
    deletar,
}
