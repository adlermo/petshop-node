let listaDePets = [];

const addPets = (nome) => {
    listaDePets.push(nome)
    return `Pet ${nome} cadastrado com sucesso!`
}

const listPets = () => {
    let list = ""
    listaDePets.forEach(pet => {
        list += `---------------------\n Nome do Pet: ${pet}\n`
    })
    return list
}

addPets("Bob")
addPets("Rex")
addPets("Dino")

module.exports = { listPets, addPets }