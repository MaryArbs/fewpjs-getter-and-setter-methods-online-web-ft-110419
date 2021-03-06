class Circle {
    constructor(radius){
        this.radius = radius;
       
    }

    get diameter(){
        return this.radius * 2
    };
    
    set diameter(newDiameter){
        this.radius = newDiameter/2
    };

    get circumference(){
        return 2 * Math.PI * this.radius
    };

    set circumference(newCir){
         this.radius = newCir/(Math.PI * 2)
    };

    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    };
}

