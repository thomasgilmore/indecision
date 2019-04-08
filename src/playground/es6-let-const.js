var nameVar = 'Andrew';

let nameLet = 'Jen';        
nameLet = 'Julie';
console.log(nameLet);

const nameConst = 'Frank';      //cannot re-define

console.log(nameConst);

function PetName() {
    var petName = 'HAL';
    return petName;
}
var fullName = 'Andrew Mead';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
