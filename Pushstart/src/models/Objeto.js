const MatrizBasica = require('./MatrizBasica')

class Obj extends MatrizBasica{
    constructor(id, x, y){
        super(x, y)
        if (typeof(id) != 'number' )
            throw 'O id deve ser numerico'
        this.id = id
    }
}

module.exports = Obj