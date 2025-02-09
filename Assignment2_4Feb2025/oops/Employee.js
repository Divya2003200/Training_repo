class Employee{
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.#salary = salary; 
      }
      #salary

      getSalary(){
      return this.#salary;
       
      }
      calculateBonus(){
        return 0;
      }
    }

class Manager extends Employee{
    calculateBonus(){
       return 0.6*this.getSalary();
    }
}
class Engineer extends Employee{
    calculateBonus(){
        return 0.4*this.getSalary();
    }
}

class Intern extends Employee{
    calculateBonus(){
       return 0.2*this.getSalary();
    }
}

let emp = new Employee("Divya", 1, 50000);
console.log(emp.calculateBonus());  

let mgr = new Manager("X", 2, 800000);
console.log(mgr.calculateBonus());  
console.log(mgr.getSalary());  