function carregar_novidades(){
    const livros_novidades = document.getElementById("livrosnovidades")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listar")
    .then((res)=>res.json())                                             /*+= vai acumular os livros*/ 
    .then((dados)=>{
        dados.map((liv)=>{
            saida += `   
            <div class="livro">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="preco">R$ ${liv.preco}</p>
                <button> <img src="img/carrinho-de-compras.png">
                <p>Adicionar ao carrinho</p>
                </button>
            </div>
            `                  
        })
        livros_novidades.innerHTML = saida;
    })
}

let pe = 0;

function rolarNovidadesEsquerda(){
    if(pe < -1800){
        pe = -2100;
    }
    else{
        pe-=150;
    }
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`

}

function rolarNovidadesDireita(){
    if(pe < 0){
        pe += 100;
    }
    else{
        pe=0;
    }
     let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`
     
}
