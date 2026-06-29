// classes


class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        
    }
    bake() {
        console.log(`Baking a ${this.size} pizza with ${this.crust} crust and toppings: ${this.toppings.join(", ")}.`);
    }
    setToppings(newToppings) {
        this.toppings = newToppings;
    }
}   
class SpecialtyPizza extends Pizza {
    constructor(size, crust, toppings, specialtyName) {
        super(size, crust, toppings);
        this.specialtyName = specialtyName;
    }
    slice() {
        console.log(`Slicing the ${this.specialtyName} specialty pizza into 8 slices.`);
    }
}
const newPizza1 = new Pizza("large", "thin","pepperoni");
newPizza1.setToppings(["pepperoni", "mushrooms", "green peppers"]);
newPizza1.bake();
const SpecialtyPizza1 = new SpecialtyPizza("medium", "stuffed", "sausage", "Meat Lovers");
SpecialtyPizza1.slice();
