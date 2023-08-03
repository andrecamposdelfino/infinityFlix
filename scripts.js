const submit = document.querySelector(".form-submit")
const input = document.querySelector(".form-input")

// const api = "http://www.omdbapi.com/?s=star&apikey=b58710e2"



async function buscarFilmes(){
   // pega o filme digitado
    let filme = input.value
   // montando a url
    if(filme){

        const resposta = await fetch(`http://www.omdbapi.com/?s=${filme}&apikey=b58710e2`)
    
        if(resposta.status === 200){
            const dados = await resposta.json()
            return dados
        }else{
            alert("Filme não encontrado :{ ")
        }

    }else{
        alert("Digite um filme")
    }
    
}

async function renderizarCatalogo(e){
    e.preventDefault()
    let content = ""
    const listaFilmes = document.querySelector("#movies")
    const filmes = await buscarFilmes()
    
    filmes.Search.forEach(filme => {
        content += `
        
            <li class="app-movies-all-card">
                <figure class="app-movies-all-figure">
                    <img src="${filme.Poster}" class="app-movies-all-thumb">
                </figure>
                <legend class="app-movies-all-legend">
                    <span class="app-movies-all-year">${filme.Year}</span>
                    <h2 class="app-movies-all-title">${filme.Title}</h2>
                </legend>
            </li>                
        `
    });
    listaFilmes.innerHTML = content

}



submit.addEventListener("click", renderizarCatalogo)