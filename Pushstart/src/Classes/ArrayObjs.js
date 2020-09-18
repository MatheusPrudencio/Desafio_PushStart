class ArrayObjs {
    constructor(){
        this.index = 0
        this.array = []
        this.totalArea = 0
    }

    get(key){
        return this[key]
    }

    addObj(obj){
        obj.index = this.index

        this.index ++
        this.totalArea += obj.area

        this.array.push(obj)
    }

    removeObj(index){
        this.array = this.array.filter( (obj) => {
            return obj.index != index
        })
    }
}

module.exports = ArrayObjs