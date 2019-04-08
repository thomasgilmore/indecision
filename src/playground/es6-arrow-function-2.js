// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1));

// this keyword - no longer bound with arrow function, really useful, so we can use it anywhere in block

const user = {
    name: 'Andrew',
    cities: ['Sandiego', 'new york', 'Dublin'],
    printPlacesLived() {            // same as "printPlacesLived = function ()", just es6 method definition syntax
        
            return this.cities.map((city) => this.name + ' has lived in ' + city);      //map transform each item, getting a new array back
                
            
        //     this.cities.forEach((city) => {         //foreach let you do something with each item
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

//challenage

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());