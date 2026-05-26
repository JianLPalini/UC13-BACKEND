const btn = document.getElementById("gerar-piada")
const p = document.getElementById("piada")

btn.addEventListener("click", async () => {
    try {
        // TENTE pegar os dados da api
        const response = await fetch('https://api.chucknorris.io/jokes/random')

        const data = await response.json() // converte a resposta para um objeto javascript, assim nosso código poder ler ela

        p.textContent = data.value

    } catch(erro){ // se der ruim, me diz o pq n deu bom
        console.log("Deu ruim, porque: " + erro)
    }
})