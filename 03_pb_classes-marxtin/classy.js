class Person {
    constructor(name, age) {
        this.personName = name;
        this.personAge = age;

    }
    log() {
        console.log(`${this.personName} is approximately ${this.personAge} years old`)
    }
}

const entity = new Person("Azathoth", 13799000000)
entity.log()



class Employee {
    constructor(fname, lname, domain) {
        this.fname = fname;
        this.lname = lname;
        this.domain = domain;
    }
    fullName() {
        console.log(this.fname, this.lname);
    }
    email() {
        console.log(`${this.fname.toLowerCase()}.${this.lname.toLowerCase()}${this.domain}`);
    }
}
const oldEmployee = new Employee("Angela", "Merkel", "@cdu.de")
oldEmployee.fullName()
oldEmployee.email()

const newEmployee = new Employee("Olaf", "Scholz", "@spd.de")
newEmployee.fullName()
newEmployee.email()


class Television {
   brand;
   #channel = 1
   #volume = 50
   

    constructor(brand) {
        this.brand = brand
       /*  this.#channel = 1
        this.#volume = 50 */
        
    }
    getChannel() {
        return this.#channel
    }
    getVolume() {
        return this.#volume
    }
    displayInfo() {
        console.log(`${this.brand} at channel ${this.getChannel()},volume  ${this.getVolume()} `);
    }
    randomChan(max,min) {
        return this.#channel = parseInt(Math.random() * (max - min) + min);
       
    }
    increaseVol(){
        return this.#volume < 100 ? this.#volume++ : (console.log("max volume reached"),this.#volume);
    
    }
    decreaseVol(){
         return this.#volume > 0 ? this.#volume-- : (console.log("max volume reached"),this.#volume);
    }
    reset() {
        this.#channel = 1
        this.#volume = 50
    }

}

const sony = new Television("sony")
console.log(sony);
sony.randomChan(1,50)
sony.increaseVol()
sony.displayInfo()