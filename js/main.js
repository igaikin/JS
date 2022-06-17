// Task 1.1

const city = 'Minsk',
    country = 'Belarus',
    population = 2009786;
let haveStadium = true;
console.log(`My city is ${city} with population ${population} inhabitants. Be in ${country}. Stadium is ${haveStadium}.`);

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
} else if (randomNumber > 50) {
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

// Task 2.1

console.log('In a given interval, even numbers: ');
for (let start = 10; start <= 50; start++) {
    if (start % 2 === 0) {
        console.log(start);
    }
}

// Task 2.2

const user = {
    firstName: 'Ilya',
    lastName: 'Haikin',
    age: 39,
    pet: true
};
console.log(`User: \t\t${user.firstName} ${user.lastName}
Age: \t\t${user.age} years old
Have pet: \t${user.pet}`);

// Task 2.3

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
let result = `${array[3]} ${array[7]} ${array[0]} ${array[8]} ${array[11]} ${array[5]} ${array[9]} ${array[6]} ${array[4]} ${array[1]} ${array[12]} ${array[2]} ${array[10]}`;
console.log(result);

// Task 2.4

const showFullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
showFullName('Ilya', 'Haikin');

// Task 2.5

const startNumber = 21,
    finishNumber = 67;
let num = startNumber;
console.log('Odd numbers in a given interval: ')
while (num <= finishNumber) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

