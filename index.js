class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(num){
        this.radius = num/2
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    set circumference(num){
        this.radius = (num/Math.PI)/2
    }

    get area(){
        return Math.PI * (this.radius * this.radius)
    }

    set area(num){
        this.radius = Math.sqrt(num/Math.PI)
    }
}