document.getElementById("CEP").addEventListener("input", async (e) => {
    let cep = e.target.value.replace(/\D/g, '')

    if (cep.length === 8) {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await res.json()

        document.getElementById("Rua").textContent = data.logradouro || "-"
        document.getElementById("Bairro").textContent = data.bairro || "-"
        document.getElementById("Cidade").textContent = data.localidade || "-"
        document.getElementById("Estado").textContent = data.uf || "-"
    }
})