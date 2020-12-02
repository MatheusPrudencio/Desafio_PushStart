const PreencheMatriz = require('./PreencheMatriz')
const Matriz = require('./Matriz')

class ControllerPreencheMatriz{
    constructor(PreencheMatriz){
        this.pMatriz = PreencheMatriz
        this.arraySubMatrizes = []
        this.matrizFinal = []
    }

    sorteiaPosicao(){
        const index = Math.floor(Math.random() * this.pMatriz.objetos.length )
        const posicao = {}
        posicao.y = this.pMatriz.objetos[index].yInicial
        posicao.x = this.pMatriz.objetos[index].xInicial

        this.pMatriz.objetos = this.pMatriz.objetos.splice(index)
        return posicao
    }

    sorteiaObj(objArray){
        const index = Math.floor(Math.random() * objArray.length)
        const obj = objArray[index]
        return obj
    }

    addRandomNaMatriz(){
        const obj = this.sorteiaObj()
        const posicao = this.sorteiaPosicao()

        this.pMatriz.addObjNaMatriz(posicao ,obj)
    }

    objGrandeParaOTamanhoDaMatriz(objArray){
        let objsGrandes = objArray.filter((obj)=>{
            if(obj.x === this.pMatriz.matriz.x || obj.y === this.pMatriz.matriz.y ) return obj
        })
        return objsGrandes
    }

    addPrimeiro(){
        const objsGrandes = this.objGrandeParaOTamanhoDaMatriz(this.pMatriz.array.array)

        let obj = undefined
        if (objsGrandes.length > 0)
            obj = objsGrandes[0]
        else
            obj = this.sorteiaObj(this.pMatriz.array.array)
        const posicao = {
            y : 0,
            x : 0
        }
        this.pMatriz.addObjNaMatriz(posicao ,obj)
        this.pMatriz.criaSubMatrizVazia(obj)
        this.pMatriz.calculaAreaDosObjs()
    }

    retornaMaiorEMenorSubMatriz(arrayObjs){
        if (arrayObjs.length === 1)
            return { 'menor':arrayObjs[0]}
        else if (arrayObjs[0].area > arrayObjs[1].area)
            return {'maior':arrayObjs[0], 'menor':arrayObjs[1]}
        else 
            return {'maior':arrayObjs[1], 'menor':arrayObjs[0]}
    }

    preencheMatrizIntermediaria(matriz, pai){
        if (matriz === undefined)
            return
        const x = matriz.xFinal - matriz.xInicial +1
        const y = matriz.yFinal - matriz.yInicial +1

        const mat = new Matriz(x,y)

        this.aObjs = this.pMatriz.array
        const pMatrizParcial = new PreencheMatriz(this.aObjs, mat)
        const possiveisObjs = this.aObjs.array.filter( (obj) => {
            return (obj.x <= x && obj.y <= y)
        })
        if ( possiveisObjs.length === 0 ){
            return 
        } else {
            const obj = this.sorteiaObj(possiveisObjs)
            pMatrizParcial.addObjNaMatriz({ 'x':0, 'y':0}, obj)
            pMatrizParcial.criaSubMatrizVazia(obj)
          
            pMatrizParcial.calculaAreaDosObjs()
            this.arraySubMatrizes.push({'posicao':matriz,
                                        'subMatriz':obj,
                                        'pai': pai})
            if (pMatrizParcial.objetos.length >= 2){
                const subMatriz = this.retornaMaiorEMenorSubMatriz(pMatrizParcial.objetos)

                this.preencheMatrizIntermediaria(subMatriz.menor, matriz)
                this.preencheMatrizIntermediaria(subMatriz.maior, matriz)
                
            } else if (pMatrizParcial.objetos.length === 1){
                this.preencheMatrizIntermediaria(pMatrizParcial.objetos[0], matriz)
                
            }
        }
    }

    criaMatrizFinal(){
        let h = [] 
        this.arraySubMatrizes.map(e => {
            if (e.pai == undefined){
                e.pFinal = e.posicao
                h.push(e)
            }
            else{
                this.arraySubMatrizes.forEach(i => {
                    if (e.pai == i.posicao){
                        e.pFinal = {}
                        
                        e.pFinal.xInicial = i.pFinal.xInicial + e.posicao.xInicial
                        e.pFinal.xFinal = i.pFinal.xFinal + e.posicao.xInicial
                        e.pFinal.yInicial = i.pFinal.yInicial + e.posicao.yInicial
                        e.pFinal.yFinal = e.posicao.yfinal
                        h.push(e)
                    }
                })
            }
        })
        h.forEach(e => {
            for (let yInicial = e.pFinal.yInicial ; yInicial < e.pFinal.yInicial + e.subMatriz.y; yInicial++) {
                for (let xInicial = e.pFinal.xInicial ; xInicial < e.pFinal.xInicial + e.subMatriz.x; xInicial++) {
                    this.matrizFinal.push({'y': yInicial, 'x': xInicial, id:e.subMatriz.id})
                }
            }    
        });
    }

}

module.exports = ControllerPreencheMatriz