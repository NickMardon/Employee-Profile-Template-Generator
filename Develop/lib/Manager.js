// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,num){
        super(name,id,email);
        this.officNumber = num;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole(){
        return "Manager";
    }
    getOffic(){
        return this.officNumber;
    }
}

module.exports = Manager;
