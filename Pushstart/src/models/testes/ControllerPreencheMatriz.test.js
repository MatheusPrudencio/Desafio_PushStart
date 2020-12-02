const ArrayObjs = require('../ArrayObjs')
const Matriz = require('../Matriz.js')
const PreencheMatriz = require('../PreencheMatriz')
const ControllerPreencheMatriz = require('../ControllerPreencheMatriz')
const Obj =  require('../Objeto')

it('add primeiro na matriz', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)
    let preencheMatriz = new PreencheMatriz(array, mat)
    let controller = new ControllerPreencheMatriz(preencheMatriz)

    controller.addPrimeiro()

    let test = true
    if(mat.matriz2D[0][0] === undefined)
        test = false
    
    expect(test).toBe(true)
})


it(' Testa Preenchimento da Matriz Final', () => {
    const array = new ArrayObjs()
    array.addObj( new Obj(2,2,2) )

    const mat = new Matriz(3,3)
    const preencheMatriz = new PreencheMatriz(array, mat)
    const controller = new ControllerPreencheMatriz(preencheMatriz, array.array)

    controller.addPrimeiro()
    controller.arraySubMatrizes.push({'posicao':{ xInicial: 2, xFinal: 2, yInicial: 0, yFinal: 1, area: 2 },
                                    'subMatriz':{ x: 1, y: 2, area: 2, id: 1, index: 3 }})
    controller.arraySubMatrizes.push({'posicao':{ xInicial: 0, xFinal: 1, yInicial: 2, yFinal: 2, area: 2 },
                                    'subMatriz':{ x: 2, y: 1, area: 2, id: 3, index: 3 }})
    controller.arraySubMatrizes.push({'posicao':{ xInicial: 2, xFinal: 2, yInicial: 2, yFinal: 2, area: 1 },
                                    'subMatriz':{ x: 1, y: 1, area: 1, id: 4, index: 3 }})
    controller.criaMatrizFinal()
    mat.addSubMatriz(controller.matrizFinal)
    mat.matriz2D
    expect(mat.matriz2D).toEqual([ [ 2, 2, 1 ], [ 2, 2, 1 ], [ 3, 3, 4 ] ])
})

it(' Testa Preenchimento da Matriz Final', () => {
    const array = new ArrayObjs()
    array.addObj( new Obj(2,2,2) )

    const mat = new Matriz(4,3)
    const preencheMatriz = new PreencheMatriz(array, mat)
    const controller = new ControllerPreencheMatriz(preencheMatriz, array.array)

    controller.addPrimeiro()
    controller.arraySubMatrizes.push({'posicao':{ xInicial: 2, xFinal: 2, yInicial: 0, yFinal: 1, area: 2 },
                                    'subMatriz':{ x: 1, y: 2, area: 2, id: 1, index: 3 }})
    controller.arraySubMatrizes.push({'posicao':{ xInicial: 0, xFinal: 1, yInicial: 2, yFinal: 2, area: 2 },
                                    'subMatriz':{ x: 2, y: 1, area: 2, id: 3, index: 3 }})
    controller.arraySubMatrizes.push({'posicao':{ xInicial: 2, xFinal: 2, yInicial: 2, yFinal: 2, area: 1 },
                                    'subMatriz':{ x: 1, y: 1, area: 1, id: 4, index: 3 }})
    controller.arraySubMatrizes.push({'posicao':{ xInicial: 3, xFinal: 3, yInicial: 0, yFinal: 2, area: 3 },
                                    'subMatriz':{ x: 1, y: 3, area: 3, id: 5, index: 3 }})
    controller.criaMatrizFinal()
    mat.addSubMatriz(controller.matrizFinal)
    mat.matriz2D
    expect(mat.matriz2D).toEqual([[2, 2, 1, 5], [2, 2, 1, 5], [3, 3, 4, 5]])
})

