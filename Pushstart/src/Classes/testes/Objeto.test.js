const Obj = require('../Objeto')
it('testa construtor', () => {
    let obj = new Obj(1, 1, 2 )
    expect(obj).toEqual({ x: 1, y: 2, area: 2, id: 1 })
})

it('Id  não numerico deve lançar exeção', () => {
    expect( () => { 
        let obj = new Obj('matheus',1,1)
        }).toThrow()
})

it('testa a herança a partir do metodo get', () => {
    let obj = new Obj(1, 1, 2 )
    expect(obj.get('id')).toBe(1)
})

it('testa a func que inverte o x com o y', () => {
    let obj = new Obj(1, 1, 2 )
    obj.inverte_XeY()
    expect(obj).toEqual({ x: 2, y: 1, area: 2, id: 1 })
})


