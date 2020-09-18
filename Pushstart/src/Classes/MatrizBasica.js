class MatrizBasica {
    constructor(x, y){
        if (typeof(x) != 'number' || typeof(y) != 'number')
            throw ' Os valores  de X e Y devem ser numeros'
        this.x = x
        this.y = y
        this.area = x*y
    }

    get(key){
        return this[key]
    }

    XeYmenorQueLimiteDoArray(finalY, finalX, inverte ){
        if (finalX > this.x || finalY > this.y){
            this.inverte_XeY()
            if ( inverte )
                throw ' Objeto maior que a Matriz'
            this.XeYmenorQueLimiteDoArray(finalY, finalX, true )
        }else return true
    }

    inverte_XeY(){
        let h = this.x
        this.x = this.y
        this.y = h
    }
}

module.exports = MatrizBasica