const ArrayObjs = require('../ArrayObjs')

describe('ArrayObjs classe testes', ()=>{
    describe('constructor()', ()=>{
        it('construtor()', () => {
            let array = new ArrayObjs()
            expect(array).toEqual({"array": [], "index": 0, "totalArea": 0})
        })
    
        it('construtor com parametro enviado incorretamente', () => {
            let array = new ArrayObjs('matheus')
            expect(array).toEqual({"array": [], "index": 0, "totalArea": 0})
        })    
    })

    describe('addOBJ()', ()=>{
        it('adiciona obj no array', () => {
            let array = new ArrayObjs()
            array.addObj({ 'matheus':1})
            expect(array.get('array')).toEqual([{'index':0, 'matheus':1 }])
        })
        it('o index está sendo gerado corretamente', () => {
            let array = new ArrayObjs()
            array.addObj({ 'matheus':1})
            array.addObj({ 'matheus':2})
            array.addObj({ 'matheus':3})
            expect(array.get('index')).toBe(3)
        })
        it('a area está sendo calculada corretamente', () => {
            let array = new ArrayObjs()
            array.addObj({ 'matheus':1, area:1})
            array.addObj({ 'matheus':2, area:1})
            array.addObj({ 'matheus':3, area:1})
            expect(array.get('totalArea')).toBe(3)
        })
        it('testa comportamento da função como um todo', () => {
            let array = new ArrayObjs()
            array.addObj({ 'matheus':1, area:1})
            array.addObj({ 'matheus':2, area:1})
            array.addObj({ 'matheus':3, area:1})
            expect(array).toEqual( {"array": [{"area": 1, "index": 0, "matheus": 1},
                                {"area": 1, "index": 1, "matheus": 2},
                                {"area": 1, "index": 2, "matheus": 3}],
                                "index": 3, "totalArea": 3})
        })

    })

    describe('removeObj()',()=>{
        it('remove um obj do array a partir do seu index no fim do array', () => {
            let array = new ArrayObjs()
            array.addObj({ 'matheus':1, area:1})
            array.addObj({ 'matheus':2, area:1})
            array.addObj({ 'matheus':3, area:1})
    
            array.removeObj(2)
            expect(array.get('array')).toEqual( [{"area": 1, "index": 0, "matheus": 1},
                                            {"area": 1, "index": 1, "matheus": 2},] )
        })
    
        it('remove um obj do array a partir do seu index no meio do array', () => {
            let array = new ArrayObjs()
            array.addObj({ 'matheus':1, area:1})
            array.addObj({ 'matheus':2, area:1})
            array.addObj({ 'matheus':3, area:1})
    
            array.removeObj(1)
            expect(array.get('array')).toEqual( [{"area": 1, "index": 0, "matheus": 1},
                                            {"area": 1, "index": 2, "matheus": 3},] )
        })
    
    
        it('remove um obj do array a partir do seu index no começo do array', () => {
            let array = new ArrayObjs()
            array.addObj({ 'matheus':1, area:1})
            array.addObj({ 'matheus':2, area:1})
            array.addObj({ 'matheus':3, area:1})
    
            array.removeObj(0)
            expect(array.get('array')).toEqual( [{"area": 1, "index": 1, "matheus": 2},
                                            {"area": 1, "index": 2, "matheus": 3},] )
        })
    })
})
   

    






