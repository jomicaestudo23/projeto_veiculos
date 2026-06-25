const calcularIPVA = (valor, ano, combustivel) => {

    let resultCalc = ''

    if( ano < 20){
        resultCalc = 'Inseto'
    } 

    switch (combustivel) {
        case "gasolina":
            return valor * 0.20
    
        case "etanol":
            return valor * 0.15
        
        case "bicombustivel":
            return valor * 0.10

        case "hibrido":
            return valor * 0.08

        case "eletrico":
            return valor * 0.02

        default:
            return 0 
    }




}
export {calcularIPVA}
