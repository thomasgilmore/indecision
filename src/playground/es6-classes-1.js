

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);        // calling parent constructor function
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();   // super used to access parent function
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, location){
        super(name, age);
        this.location = location;
    }
    getGretting(){
        let gretting = super.getGretting();
        gretting += `I'm visiting  from ${this.location}.`;
        return gretting;
    }
    
}

const msg = new Student('Allen Chang', 23, 'Computer Science');
console.log(msg.getDescription());

const loc = new Traveler('Allen Chang', 23, 'San Diego');
console.log(loc.getGretting());

