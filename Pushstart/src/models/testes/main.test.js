const ArrayObjs = require('../ArrayObjs')
const Matriz = require('../Matriz.js')
const PreencheMatriz = require('../PreencheMatriz')
const ControllerPreencheMatriz = require('../ControllerPreencheMatriz')
const Obj =  require('../Objeto')
const main = require('../main')

describe('função main', ()=>{
    it('testa a solução de matriz 3x3 possivel de resolver', async () => {
        const array = []
        array.push( new Obj(1,1,1) )
        array.push( new Obj(2,1,2) )
        array.push( new Obj(3,2,1) )
        array.push( new Obj(4,2,2) )

        let matrizFinal = await main(3,3, array)

        while (matrizFinal === undefined && i <= 3){
            matrizFinal = await main(4,4, array)
            i++
        }
        console.log(matrizFinal)

        expect(matrizFinal).not.toBe()
    } )

    it('testa a solução de matriz 4x4 possivel de resolver', async () => {
        const array = []
        array.push( new Obj(1,1,1) )
        array.push( new Obj(2,1,2) )
        array.push( new Obj(3,1,2) )
        array.push( new Obj(4,2,2) )
        array.push( new Obj(5,1,3) )
        array.push( new Obj(6,2,2) )

        let matrizFinal = await main(4,4, array)
        let i = 0

        while (matrizFinal === undefined && i <= 3){
            matrizFinal = await main(4,4, array)
            i++
        }
        console.log(matrizFinal)

        expect(matrizFinal).not.toBe()
    } )

    it('testa a solução de matriz 4x4 possivel de resolver', async () => {
        const array = []
        array.push( new Obj(1,1,4) )
        array.push( new Obj(2,3,4) )

        let matrizFinal = await main(4,4, array)

        while (matrizFinal === undefined && i <= 3){
            matrizFinal = await main(4,4, array)
            i++
        }

        console.log(matrizFinal)

        expect(matrizFinal).not.toBe()
    } )

    it('testa a solução de matriz 8x5 descrita no desafio', async () => {
        const array = []
        array.push( new Obj(1,6,2) )
        array.push( new Obj(2,2,2) )
        array.push( new Obj(3,2,1) )
        array.push( new Obj(3,2,1) )
        array.push( new Obj(4,8,1) )
        array.push( new Obj(5,2,1) )
        array.push( new Obj(5,2,1) )
        array.push( new Obj(5,2,1) )
        array.push( new Obj(6,1,1) )
        array.push( new Obj(6,1,1) )
        array.push( new Obj(6,1,1) )
        array.push( new Obj(6,1,1) )
        array.push( new Obj(6,1,1) )
        array.push( new Obj(6,1,1) )

        let matrizFinal = await main(8,5, array)
        let i = 0

        while (matrizFinal === undefined && i <= 50){
            matrizFinal = await main(8,5, array)
            i++
        }

        console.log(matrizFinal)

        expect(matrizFinal).not.toBe()
    } )
})

   
