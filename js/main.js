// Task 1.1

const city = 'Minsk',
    country = 'Belarus',
    population = 2009786;
let boolean
stadium = true;
console.log(`My city is ${city} with population ${population} inhabitants. Be in ${country}. Stadium is ${stadium}.`);

// Task 1.2

const height = 40,
    width = 70;
console.log(`Square is ${(height * width)}.`)

// Task 1.3

const time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;
let distance = (speedOfFirst + speedOfSecond) * time;
console.log(`Distance between cities ${distance}km.`);

// Task 1.4

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log(`randomNumber = ${randomNumber} less than 20`);
} else if
(randomNumber > 50) {
    console.log(`randomNumber = ${randomNumber} more than 50`);
} else {
    console.log(`randomNumber = ${randomNumber} less than 20 and more than 50`);
}

// Task 1.5

// const randomNumber = Math.floor(Math.random() * 100);
// /*TODO Эту строку закомментировал, т.к. она используется из предыдущего задания и если все задания в одном файле, то зачем повторно объявлять и инициализировать)))
switch (true) {
    case randomNumber < 20:
        console.log(`randomNumber = ${randomNumber} less than 20`);
        break;
    case randomNumber > 50:
        console.log(`randomNumber = ${randomNumber} more than 50`);
        break;
    default:
        console.log(`randomNumber = ${randomNumber} less than 20 and more than 50`);
}
