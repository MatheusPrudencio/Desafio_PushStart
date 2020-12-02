const Matriz = require('../Matriz.js')

describe('Classe Matriz',()=>{
  describe('costructor()', ()=>{
    it('funcionando corretamente', () => {
      let mat = new Matriz(2,4)
      expect(mat).toEqual({
          x: 2,
          y: 4,
          area: 8,
          matriz2D: [
            [ undefined, undefined ],
            [ undefined, undefined  ],
            [ undefined, undefined ],
            [ undefined, undefined ]
          ]
        })
    })
  })
  
  describe('addObj()', ()=>{
    it('função que adiciona com parametro correto 1', () => {
      let mat = new Matriz(2,4)
  
      posicaoInicial = { x: 1, y: 1 }
      const obj = {id:1, x: 1, y: 2}
  
      mat.addObj(posicaoInicial, obj)
      expect(mat.get('matriz2D')).toEqual([
          [ undefined, undefined ],
          [ undefined, 1  ],
          [ undefined, 1 ],
          [ undefined, undefined ]
        ])
  })
  
  it('função que adiciona com parametro correto 2', () => {
      let mat = new Matriz(4,5)
  
      posicaoInicial = { x: 2, y: 2 }
      const obj = {id:1, x: 2, y: 3}
  
      mat.addObj(posicaoInicial, obj)
      expect(mat.get('matriz2D')).toEqual([
          [ undefined, undefined, undefined, undefined ],
          [ undefined, undefined, undefined, undefined ],
          [ undefined, undefined, 1, 1 ],
          [ undefined, undefined, 1, 1 ],
          [ undefined, undefined, 1, 1 ]
        ])
  })
  
  it('função que adiciona com parametro correto 3', () => {
      let mat = new Matriz(4,5)
  
      posicaoInicial = { x: 0, y: 0 }
      const obj = {id:1, x: 1, y: 3}
  
      mat.addObj(posicaoInicial, obj)
      expect(mat.get('matriz2D')).toEqual([
          [ 1, undefined, undefined, undefined ],
          [ 1, undefined, undefined, undefined ],
          [ 1, undefined, undefined, undefined ],
          [ undefined, undefined, undefined, undefined ],
          [ undefined, undefined, undefined, undefined ]
      ])    
  })
  
  it('x maior que o array', () => {
      let mat = new Matriz(2,4)
  
      posicaoInicial = { x: 1, y: 1 }
      const obj = {id:1, x: 2, y: 2}
  
      expect( () => {
        mat.addObj(posicaoInicial, obj)
  
      }).toThrow()
  })
  
  it('y maior que o array', () => {
      let mat = new Matriz(2,4)
  
      posicaoInicial = { x: 1, y: 2 }
      const obj = {id:1, x: 1, y: 3}
  
      expect( () => {
        mat.addObj(posicaoInicial, obj)
      }).toThrow()
  })
  })
})


