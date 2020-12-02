const Basica = require('../MatrizBasica.js')

it('constructor com parametros corretos', () => {
    let bas = new Basica(1,2)
    expect(bas).toEqual({ x:1, y:2, area:2})
})

it('constructor com parametro nao numerico lança exeção', () => {
    expect( () => { 
        let bas = new Basica(1,'matheus')
        }).toThrow()
})


it('constructor com parametro faltante lança exeção', () => {
    expect( () => { 
        let bas = new Basica(1)
        }).toThrow()
})


it('get com parametro correto', () => {
    let bas = new Basica(1,2)
    expect(bas.get('y')).toBe(2)
})

it('get com parametro incorreto', () => {
    let bas = new Basica(1,2)
    expect(bas.get('h')).toBe(undefined)
})

