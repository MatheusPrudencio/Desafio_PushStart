const MatrizBasica = require("./MatrizBasica")

class Matriz extends MatrizBasica {
    constructor(x, y){
        super(x,y)
        this.matriz2D = this.criaMatriz2DParaMostrarOResultado()
    }

    criaMatriz2DParaMostrarOResultado(){
        let matriz = new Array(this.y)

        for (let i = 0; i < matriz.length; i++) {
            matriz[i] = new Array(this.x);
        }

        return matriz
    }

    // A posição inicial passada sera onde a cordenada (0,0) do Obj ficara.
    // sendo posição inicial um objeto com as cordenadas x e y
    addObj(posicaoInicial, obj){
        let inicialY = posicaoInicial.y
        let inicialX = posicaoInicial.x
        let finalY = inicialY + obj.y
        let finalX = inicialX + obj.x

        if (this.XeYmenorQueLimiteDoArray(finalY, finalX)) { 
            for (inicialY ; inicialY < finalY; inicialY++) {
                for (let inicial_X = inicialX ; inicial_X < finalX; inicial_X++) {
                    this.matriz2D[inicialY][inicial_X] = obj.id
                }
            }
        }
    }

    addSubMatriz(subMatriz){
        subMatriz.forEach(e => {
            this.matriz2D[e.y][e.x] = e.id
        });
    }

    possuiUndefined(){
        for (let i = 0; i < this.y ; i++) {
            for (let h = 0; h < this.x; h++) {
                if (this.matriz2D[i][h] == undefined){
                    return true
                }
            }    
        }
        return false
    }
}

module.exports = Matriz