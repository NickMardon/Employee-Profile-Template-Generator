// TODO: Write code to define and export the Employee class
function Employee(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.getId = function getId(){
        console.log(this.id);
        return this.id;
    }
    this.getName = function getName(){
        console.log(this.name);
        return this.name;
    };
    this.getEmail = function getEmail(){
        console.log(this.email);
        return this.email;
    }
}

module.exports = Employee;