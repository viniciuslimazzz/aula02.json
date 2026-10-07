async function buscarHusky() {

    const url = "https://dog.ceo/api/breed/husky/images/random";
    
    try {

        const resposta = await fetch(url);

        const dados = await resposta.json();

        document.getElementById("imagemHusky").src = dados.message;

    } catch (erro) {

        console.error("Erro ao buscar a imagem:", erro);

        alert("Não foi possível carregar a imagem do Husky.");
    }
}