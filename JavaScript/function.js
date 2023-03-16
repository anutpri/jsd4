
//Constuctor function
let Car = function (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = name => console.log(`${name} is driving car `);
    // this.drive = function(name){
    //     console.log(`${name} is driving car `);
    // };
    
};

let myCar = new Car('Nisan', 'A123', 2003);
    console.log(myCar);
    myCar.drive('Jack');

let myCar1 = new Car('Honda', 'H435', 2010);
    console.log(myCar1);
    myCar1.drive('Jill');