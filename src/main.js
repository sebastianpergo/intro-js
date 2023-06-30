function sayHello(name, age){
    const message = `Hello, my name is ${name} and I am ${age}!`;
    return message;
}

console.log(sayHello('Sebastian',8))

const sayBye = (name = 'Pedro', age = 10) => {
    const message = `Bye, my name is ${name} and I am ${age}!`;
    return message;
}

const result = sayBye('Pedro', 10);
console.log(result);

const sayHi = (name = 'Francisco', age = 15) => `Hi, my name is ${name} and I am ${age}!`;
const result2 = sayHi('Francisco', 15);
console.log(result2);