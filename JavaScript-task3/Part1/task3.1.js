// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
const dog = {
    name: 'Richie',
    age: 3.5,
    breed: 'labrador',
    color: 'golden',
    trained: true,
};

// - людину
const human = {
    name: 'Dan',
    age: 17,
    hair: 'black',
    eyes: 'blue',
    form: 'skinny',
};

// - автомобіль
const car = {
    country: 'USA',
    brand: 'Tesla',
    model: 3,
    electric: true,
    passengers: 5,
};

// - квартиру
const flat = {
    location: 'downtown',
    rooms: 2,
    area: 56,
    bath: false,
    furniture: true,
};

// - книгу
const book = {
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    cover: 'firm',
    pages: 429,
    historical: false,
};

// -- Створити масив та вивести його в консоль:
// - з 5 собак
const flock = [dog, dog, dog, dog, dog];
console.log (flock);

// - 3 5 людей
const team = [human, human, human, human, human,];
console.log (team);

// - з 5 автомобілів
const race = [car, car, car, car, car];
console.log (race);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
const house = {
    area: [3, 200, 2.7, 7],
    outdors: {
        terrace: true,
        pool: false,
        garden: 'lemon tree',
    } ,
    garage: true,
    design: 'studio',
    rooms: 5,
}

// - водій
const driver = {
    name: "Volodya",
    experience: 14,
    education: {
        school: '№125',
        university: false,
    },
    lisence: true,
    character: ['sociable', 'responsible', 'reasonable', 'patient'],
};

// - іграшку
const toy = {
    color: brown,
    material: 'wood',
    for: {
        sex: male,
        age: 5,   
    },
    size: [4, 16, 8, 148],
    delivery: true ,
};


// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log (users[7].status);

// - статус Максима
console.log (users [4].status);
console.log (users [10].status)


// - ім'я передостаннього об'єкту
console.log (users [9].name);

// - ім'я третього об'єкта
console.log (users [2].name);

// - вік Олега
console.log (users [6].age);

// - вік Олі
console.log (users [9].age);

// - вік + ім'я 5го об'єкта
console.log (users [4].name, users [4].age);


// - вік + сатус Анни
console.log (users [5].age, users [5].status)

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

