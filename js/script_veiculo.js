import { calcularIPVA } from "./script_calculo.js";
const listVeiculo = document.querySelector('#div-lista-veiculo')
const crud = document.querySelector('#form-props')

const veiculos = []

crud.addEventListener('submit',(evt) => {
evt.preventDefault();


const inform = new FormData(crud)

const informacoes ={
    modelo: inform.get('modelo'),
    marca: inform.get('marca'),
    placa: inform.get('placa'),
    ano: inform.get('ano'),
    valor: inform.get('valor'),
    combustivel: inform.get('combustível')
}

addInformacoes(informacoes)

crud.reset()


});

const addInformacoes = (novaInf) => {
veiculos.push(novaInf)


listInf()


}

const listInf = () => {
listVeiculo.innerHTML = ''


if (veiculos.length === 0){
    listVeiculo.innerHTML = 'Nenhum veículo foi registrado'
    return
}else{

}

veiculos.forEach((elem, i) => {

    const resultado = calcularIPVA(elem)

    listVeiculo.innerHTML +=  `
    <p>Modelo: ${elem.modelo}</p>
            <p>Marca: ${elem.marca}</p>
            <p>Placa: ${elem.placa}</p>
            <p>Ano: ${elem.ano}</p>
            <p>Valor: R$ ${elem.valor}</p>
            <p>Combustível: ${elem.combustivel}</p>
        `

})


}

listInf()
