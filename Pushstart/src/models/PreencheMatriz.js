class PreencheMatriz{
    constructor(ArrayObjs, Matriz){
        this.array = ArrayObjs
        this.matriz = Matriz
        this.linhas = []
        this.objetos = []
    }
    
    get(key){
        return this[key]
    }

    addObjNaMatriz(posicaoinicial, obj){
        this.matriz.addObj(posicaoinicial, obj)
        this.array.removeObj(obj.index)
    }

    resetaObjsELinhas(){
        this.linhas = []
        this.objetos = []
    }

    //Este método agrupa todas as linhas e suas respectivas caracteristicas com undefined na matriz 
    buscaLinhasVazias(){
        for (let i = 0 ; i < this.matriz.y; i++) {
            this.existeSequencia(0, i)
        } 
    }

    andaPelaLinhaEmBuscaDeSequencia(objetivo, xInicial, y, tipoDeComparacao = 'igualdade' ){
        for (let x = xInicial ; x < this.matriz.y; x++) {
            if(tipoDeComparacao === 'igualdade'){
                if (this.matriz.matriz2D[y][x] === objetivo)
                    return { 'y':y, 'x':x}
            }
            else {
                if (this.matriz.matriz2D[y][x] != objetivo)
                    return { 'y':y, 'x':x}
            }      
        }
        return 'Nao existe'  
    }

    existeSequencia(x, y){
        let existeSequencia = this.andaPelaLinhaEmBuscaDeSequencia(undefined, x, y, 'igualdade')
        if ( existeSequencia != 'Nao existe'){
            let existeFimNaSequencia = this.andaPelaLinhaEmBuscaDeSequencia(undefined, existeSequencia.x, y, 'diferente')
            if ( existeFimNaSequencia === 'Nao existe')
                this.linhas.push({ 'y':y, 'xInicial':existeSequencia.x, 'xFinal': this.matriz.x - 1})
            else {
                this.linhas.push({ 'y':y, 'xInicial':existeSequencia.x, 'xFinal': existeFimNaSequencia.x-1})
                this.existeSequencia(existeFimNaSequencia.x, y)   
            }
        }
    }

    criaObjsApartirDaslinhas( linhas ){
        if (linhas.length === 0)
            return
        let linha  = linhas[0]
        let possivelMatriz = {'xInicial':linha.xInicial, 'xFinal':linha.xFinal, 'yInicial':linha.y, 'yFinal':linha.y};

        let h = linhas.filter( linha => {
            if (linha.xInicial <= possivelMatriz.xInicial && linha.xFinal >= possivelMatriz.xFinal)
                return true
        })

       let midlewareObj = h.reduce( (obj,linha) => {
            if (linha.xInicial === possivelMatriz.xInicial && linha.xFinal === possivelMatriz.xFinal)
                obj.linha.push(linha)
            
            if (linha.y === obj.yFinal +1 )
                obj.yFinal ++
            return obj
        }, {'linha':[], 'yFinal':possivelMatriz.yFinal})

        possivelMatriz.yFinal = midlewareObj.yFinal
        this.objetos.push(possivelMatriz)

        let linhasNaoUsadas = linhas.filter(linha => {
            if (midlewareObj.linha.indexOf(linha) === -1)
                return true
        }) 

        if (linhasNaoUsadas.length != 0)
            this.criaObjsApartirDaslinhas(linhasNaoUsadas)
    }

    criaObjsApartirDasIntersecoes(){
        const array = []

        this.objetos.forEach(element => {
            this.objetos.forEach( obj => {
                if (obj.xInicial < element.xInicial){
                    array.push({'xInicial':obj.xInicial,
                                'xFinal': element.xInicial -1,
                                'yInicial':obj.yInicial,
                                'yFinal':obj.yFinal})
                } else if (obj.xInicial > element.xInicial){
                    array.push({'xInicial':obj.xInicial,
                                'xFinal': obj.xFinal,
                                'yInicial':obj.yInicial,
                                'yFinal':obj.yFinal})
                }
                
            })
        })
        if ( this.objetos.length > 1)
            this.objetos = [...array]
        this.calculaAreaDosObjs()
    }

    criaSubMatrizVazia(obj){
        if (this.matriz.x == obj.x && this.matriz.y == obj.y)
            return 
        else if (this.matriz.x == obj.x){
            this.objetos.push({xInicial: 0,
                               xFinal: this.matriz.x -1,
                               yInicial: obj.y, 
                               yFinal: this.matriz.y -1
            })}
        else if (this.matriz.y == obj.y){
            this.objetos.push({xInicial: obj.x,
                xFinal: this.matriz.x-1 ,
                yInicial: 0, 
                yFinal: this.matriz.y -1
            })}
        else {
            this.objetos.push({xInicial: 0,
                xFinal: obj.x -1,
                yInicial: obj.y, 
                yFinal: this.matriz.y -1
            })
            this.objetos.push({xInicial: obj.x,
                xFinal: this.matriz.x-1 ,
                yInicial: 0, 
                yFinal: this.matriz.y -1
            })
        }

        }

    calculaAreaDosObjs(){
        this.objetos = this.objetos.map( obj => {
            obj.area = (obj.xFinal - obj.xInicial +1) * (obj.yFinal - obj.yInicial +1)
            return obj
        })
    }
} 

module.exports = PreencheMatriz