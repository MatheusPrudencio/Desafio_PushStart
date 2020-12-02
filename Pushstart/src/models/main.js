const ArrayObjs = require('./ArrayObjs')
const Matriz = require('./Matriz.js')
const PreencheMatriz = require('./PreencheMatriz')
const ControllerPreencheMatriz = require('./ControllerPreencheMatriz')

function main(x, y, arrayObjs){
    const array = new ArrayObjs()
    arrayObjs.forEach(e => {
        array.addObj(e)
    });
    const mat = new Matriz(x,y)
    const preencheMatriz = new PreencheMatriz(array, mat)
    const controller = new ControllerPreencheMatriz(preencheMatriz, array.array)
    controller.addPrimeiro()

    const subMatriz = controller.retornaMaiorEMenorSubMatriz(controller.pMatriz.objetos)
    controller.preencheMatrizIntermediaria(subMatriz.menor)
    controller.preencheMatrizIntermediaria(subMatriz.maior)
    controller.criaMatrizFinal()
    controller.pMatriz.matriz.addSubMatriz(controller.matrizFinal)
    if (controller.pMatriz.matriz.possuiUndefined() === true){
        main(x, y , arrayObjs)
        console.log('tentativa de completar a matriz', controller.pMatriz.matriz)
    }
    else{
        return preencheMatriz.matriz.matriz2D
    }        
}

function mainPromise(x,y, arrayObjs){
    return new Promise( (resolve, reject) => {
        try{
            resolve(main(x,y, arrayObjs))
        }catch(e){
            reject(e)
        }
    })
}

module.exports = mainPromise
    
    
