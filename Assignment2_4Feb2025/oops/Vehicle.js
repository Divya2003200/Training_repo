class Vehicle{

constructor(brand,model,rentPricePerDay){
    this.brand=brand;
    this.model=model
    this.rentPricePerDay=rentPricePerDay
}

calculateRentalCost(days){
    return this.rentPricePerDay*days
 }
}

class Car extends Vehicle{
    calculateRentalCost(days){
        console.log("Rent for car is")
       return super.calculateRentalCost(days);
     }
}

class Bike extends Vehicle{
    
    calculateRentalCost(days){
        console.log("Rent for Bike is")
       return super.calculateRentalCost(days);
     }
}

class Truck extends Vehicle{
    calculateRentalCost(days){
        console.log("Rent for Truck is")
      return super.calculateRentalCost(days);
     }
}

let vehicle = new Vehicle("Tata", "Van", 50);
console.log(vehicle.calculateRentalCost(5)); 

let car = new Car("Honda", "Civic", 80);
console.log(car.calculateRentalCost(5)); 

let bike = new Bike("Hero", "Splendor", 90);
console.log(bike.calculateRentalCost(5)); 

let truck = new Truck("Ashok Leyland", "Heavy", 100);
console.log(truck.calculateRentalCost(5));
