const ArrayObjs = require('../ArrayObjs')
const Matriz = require('../Matriz.js')
const PreencheMatriz = require('../PreencheMatriz')
const Obj =  require('../Objeto')


it('O obj é add a matriz ', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})

    expect(preencheMatriz.get('matriz').get('matriz2D')).
        toEqual([[1, 1, undefined, undefined, undefined],
                [1, 1, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined]])
})

it('ao add um obj a matriz o obj é removido do array ', () => {
    let array = new ArrayObjs()
    array.addObj({index:1, 'x':1, 'y':1})
    array.addObj({index:2, 'x':2, 'y':2})
    array.addObj({index:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {index:1, 'x':1, 'y':1})

    expect(preencheMatriz.get('array').get('array')).
        toEqual([{"index": 0, "x": 1, "y": 1}, {"index": 2, "x": 3, "y": 3}])
})

it('anda pela matriz em busca devolvendo nao existe', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})

    expect(preencheMatriz.andaPelaLinhaEmBuscaDeSequencia(3,0,0)).
        toEqual('Nao existe')
})

it('anda pela matriz com parametro com tipo de comparacao', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})

    expect(preencheMatriz.andaPelaLinhaEmBuscaDeSequencia(undefined,0,0,'diferente')).
        toEqual({ y: 0, x: 0 })
})

it('Cria Linhas vazias com 1 Objeto na ponta', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})
    preencheMatriz.buscaLinhasVazias()

    expect(preencheMatriz.linhas).
        toEqual([{"xFinal": 4, "xInicial": 2, "y": 0},
                {"xFinal": 4, "xInicial": 2, "y": 1},
                {"xFinal": 4, "xInicial": 0, "y": 2},
                {"xFinal": 4, "xInicial": 0, "y": 3},
                {"xFinal": 4, "xInicial": 0, "y": 4}])
})

it('Cria linhas vazias com 2 Objetos', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})
    preencheMatriz.addObjNaMatriz({ 'x':2, 'y':2}, {id:1, 'x':1, 'y':2})
    preencheMatriz.buscaLinhasVazias()

    expect(preencheMatriz.linhas).
        toEqual( [{"xFinal": 4, "xInicial": 2, "y": 0},
                {"xFinal": 4, "xInicial": 2, "y": 1},
                {"xFinal": 1, "xInicial": 0, "y": 2},
                {"xFinal": 4, "xInicial": 3, "y": 2}, 
                {"xFinal": 1, "xInicial": 0, "y": 3}, 
                {"xFinal": 4, "xInicial": 3, "y": 3}, 
                {"xFinal": 4, "xInicial": 0, "y": 4}])
})

it('Cria linhas vazias com 3 Objetos', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})
    preencheMatriz.addObjNaMatriz({ 'x':2, 'y':2}, {id:1, 'x':1, 'y':2})
    preencheMatriz.addObjNaMatriz({ 'x':3, 'y':2}, {id:1, 'x':1, 'y':3})
    preencheMatriz.buscaLinhasVazias()

    expect(preencheMatriz.linhas).
        toEqual( [{"xFinal": 4, "xInicial": 2, "y": 0}, 
                 {"xFinal": 4, "xInicial": 2, "y": 1}, 
                 {"xFinal": 1, "xInicial": 0, "y": 2}, 
                 {"xFinal": 4, "xInicial": 4, "y": 2}, 
                 {"xFinal": 1, "xInicial": 0, "y": 3},
                 {"xFinal": 4, "xInicial": 4, "y": 3}, 
                 {"xFinal": 2, "xInicial": 0, "y": 4}, 
                 {"xFinal": 4, "xInicial": 4, "y": 4}])
})

it('Cria matrizes a partir de 1 Obj add na matriz', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})

    preencheMatriz.buscaLinhasVazias()
    preencheMatriz.criaObjsApartirDaslinhas(preencheMatriz.linhas)

    expect(preencheMatriz.objetos).
        toEqual([{"xFinal": 4, "xInicial": 2, "yFinal": 4, "yInicial": 0}, 
                 {"xFinal": 4, "xInicial": 0, "yFinal": 4, "yInicial": 2}])
})

it('Cria matriz com 2 Objetos', () => {
    let array = new ArrayObjs()
    array.addObj({id:1, 'x':1, 'y':1})
    array.addObj({id:2, 'x':2, 'y':2})
    array.addObj({id:3, 'x':3, 'y':3})

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})
    preencheMatriz.addObjNaMatriz({ 'x':2, 'y':2}, {id:1, 'x':1, 'y':2})

    preencheMatriz.buscaLinhasVazias()
    preencheMatriz.criaObjsApartirDaslinhas(preencheMatriz.linhas)

    expect(preencheMatriz.objetos).
        toEqual( [{"xFinal": 4, "xInicial": 2, "yFinal": 1, "yInicial": 0}, 
                  {"xFinal": 1, "xInicial": 0, "yFinal": 4, "yInicial": 2}, 
                  {"xFinal": 4, "xInicial": 3, "yFinal": 4, "yInicial": 2}, 
                  {"xFinal": 4, "xInicial": 0, "yFinal": 4, "yInicial": 4}])
})

it('Testa a criação dos objetos com interseccoes I', () => {
    let array = new ArrayObjs()
    array.addObj( new Obj(1,1,1) )
    array.addObj( new Obj(2,2,2) )
    array.addObj( new Obj(3,3,3) )

    let mat = new Matriz(5,5)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':2})
    preencheMatriz.criaSubMatrizVazia({id:1, 'x':2, 'y':2})
    preencheMatriz.calculaAreaDosObjs()

    expect(preencheMatriz.objetos).
        toEqual( [{"area": 6, "xFinal": 1, "xInicial": 0, "yFinal": 4, "yInicial": 2},
        {"area": 15, "xFinal": 4, "xInicial": 2, "yFinal": 4, "yInicial": 0}] )
})

it('Testa a criação dos objetos com interseccoes II', () => {
    let array = new ArrayObjs()
    array.addObj( new Obj(1,1,1) )
    array.addObj( new Obj(2,2,2) )
    array.addObj( new Obj(3,3,3) )

    let mat = new Matriz(3,3)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':1, 'y':2})
    preencheMatriz.criaSubMatrizVazia({id:1, 'x':1, 'y':2})
    preencheMatriz.calculaAreaDosObjs()

    expect(preencheMatriz.objetos).
        toEqual([{"area": 1, "xFinal": 0, "xInicial": 0, "yFinal": 2, "yInicial": 2}, 
                {"area": 6, "xFinal": 2, "xInicial": 1, "yFinal": 2, "yInicial": 0}]  )
})

it('Testa a criação dos objetos com interseccoes III', () => {
    let array = new ArrayObjs()
    array.addObj( new Obj(1,1,1) )
    array.addObj( new Obj(2,2,2) )
    array.addObj( new Obj(3,3,3) )

    let mat = new Matriz(1,3)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':1, 'y':2})
    preencheMatriz.criaSubMatrizVazia({id:1, 'x':1, 'y':2})
    preencheMatriz.calculaAreaDosObjs()

    expect(preencheMatriz.objetos).
        toEqual( [{"area": 1, "xFinal": 0, "xInicial": 0, "yFinal": 2, "yInicial": 2}])
})

it('Criação dos objetos com interseccoes retornando 1 objeto', () => {
    let array = new ArrayObjs()
    array.addObj( new Obj(1,1,1) )
    array.addObj( new Obj(2,2,2) )
    array.addObj( new Obj(3,3,3) )

    let mat = new Matriz(2,2)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':1, 'y':2})

    preencheMatriz.buscaLinhasVazias()
    preencheMatriz.criaObjsApartirDaslinhas(preencheMatriz.linhas)

    preencheMatriz.criaObjsApartirDasIntersecoes()
    preencheMatriz.calculaAreaDosObjs()

    expect(preencheMatriz.objetos).
        toEqual( [{"area": 2, "xFinal": 1, "xInicial": 1, "yFinal": 1, "yInicial": 0}])
})

it('Testa a criação dos objetos sem interseccoes V', () => {
    let array = new ArrayObjs()
    array.addObj( new Obj(1,1,1) )
    array.addObj( new Obj(2,2,2) )
    array.addObj( new Obj(3,3,3) )

    let mat = new Matriz(3,3)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':2, 'y':1})
    preencheMatriz.criaSubMatrizVazia({id:1, 'x':2, 'y':1})
    preencheMatriz.calculaAreaDosObjs()

    expect(preencheMatriz.objetos).
        toEqual([{"area": 4, "xFinal": 1, "xInicial": 0, "yFinal": 2, "yInicial": 1}, 
                {"area": 3, "xFinal": 2, "xInicial": 2, "yFinal": 2, "yInicial": 0}]  )
})

it('Criação do Objeto que completa a matriz', () => {
    let array = new ArrayObjs()
    array.addObj( new Obj(1,1,1) )
    array.addObj( new Obj(2,2,2) )
    array.addObj( new Obj(3,3,3) )

    let mat = new Matriz(3,3)

    let preencheMatriz = new PreencheMatriz(array, mat)
    preencheMatriz.addObjNaMatriz({ 'x':0, 'y':0}, {id:1, 'x':3, 'y':3})
    preencheMatriz.criaSubMatrizVazia({id:1, 'x':3, 'y':3})
    expect(preencheMatriz.objetos).
        toEqual([])
})
