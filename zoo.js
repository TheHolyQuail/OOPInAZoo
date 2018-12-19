animals = [];
var animalPopulation = 0;


function run() {
    var tigger = new Tiger("Tigger");
    animals.push(tigger);
// tigger.eat("meat");
// tigger.eat("kibble");
//
    var pooh = new Bear("Pooh");
    animals.push(pooh);
// pooh.eat("fish");
// pooh.eat("meat");
//
    var rarity = new Unicorn("Rarity");
    animals.push(rarity);
// rarity.eat("marshmallows");
// rarity.sleep();
//
    var gemma = new Giraffe("Gemma");
    animals.push(gemma);
// gemma.eat("meat");
// gemma.eat("leaves");
//
    var stinger = new Bee("Stinger");
    animals.push(stinger);
// stinger.eat("ice cream");
// stinger.eat("pollen");

    var Zoebot = new Zookeeper("Zoebot", animals);
    Zoebot.feedAnimals("meat");
}

//zookeeper
class Zookeeper {
    constructor(name, animals) {
        this.name = name;
        this.animals = animals;
    }

    feedAnimals(food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals");
        for(var i = 0; i < animals.length;i++){
            this.animals[i].eat(food);
        }
    }
}

//Animal super code
class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;

        animalPopulation++;
    }

    static getPopulation() {
        return animalPopulation;
    }


    eat(food){
        console.log(this.name + " eats " + food);

        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
}

//Tiger stuff
class Tiger extends Animal {
    constructor(name) {
        super(name, 'meat')
    }
}

//Bear stuff
class Bear extends Animal {
    constructor(name) {
        super(name, 'fish')
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }
}

//Bee
class Bee extends Animal {
    constructor(name) {
        super(name, 'pollen')
    }

    eat(food){
        if(food == this.favoriteFood){
            console.log(this.name + " eats " + food);
        }
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : console.log("YUCK!!! " + this.name + " will not eat " + food);
        if(food == this.favoriteFood){
            this.sleep()
        }
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }
}

//Giraffe
class Giraffe extends Animal {
    constructor(name) {
        super(name, 'leaves')
    }
    eat(food){
        if(food == this.favoriteFood){
            console.log(this.name + " eats " + food);
        }
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : console.log("YUCK!!! " + this.name + " will not eat " + food);
        if(food == this.favoriteFood){
            this.sleep()
        }
    }
}

//Unicorn
class Unicorn extends Animal {
    constructor(name) {
        super(name, 'marshmallows')
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

//polygon stuff

// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //super
//     super('Polygon'){}
//
//     //method #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
//page 10

// var p1 = new Polygon(20, 40);
// var p2 = new Polygon(100, 200);

