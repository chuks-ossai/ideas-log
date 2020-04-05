class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name ? this.name : 'Anonymous'}, ${this.age} old`;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getDescription() {
        let description = super.getGreeting();
        description += this.homeLocation ? `. I live in ${this.homeLocation}` : '';
        return description;
    }
}

const me = new Person('Chukwudi Ossai', 32);
console.log(me);
console.log(me.name)
console.log(me.age);
console.log(me.getGreeting());
const traveller = new Traveller('Samson Siasia', 55);
console.log(traveller);
console.log(traveller.getDescription());