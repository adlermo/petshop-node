let listaDePets = [];

const addPets = (...nome) => {
    if(typeof nome == "Array"){
        nome.forEach( n => listaDePets.push(n))
    } else {
        listaDePets.push(nome)
    }
    return `Pet ${nome} cadastrado com sucesso!`
}

const listPets = () => {
    let list = ""
    listaDePets.forEach(pet => {
        list += `---------------------\n Nome do Pet: ${pet}\n`
    })
    return list
}
console.log(
addPets("Bob", "Nutt")
)
addPets("Rex");
addPets("Dino");
module.exports = { listPets, addPets }