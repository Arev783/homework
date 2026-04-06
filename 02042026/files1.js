class Employee{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName=lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;        
    }
}
const emp = new Employee("John", "Doe");
console.log(emp.fullName); 