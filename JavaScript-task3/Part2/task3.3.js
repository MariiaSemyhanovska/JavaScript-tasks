// 1. создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
const dog = {
    name: 'Richie',
    age: 3.5,
    breed: 'labrador',
    color: 'golden',
    trained: true,
};

const human = {
    hair: 'black',
    eyes: 'blue',
    form: 'skinny',
    tall: false,
};

const car = {
    country: 'USA',
    brand: 'Tesla',
    model: 3,
    electric: true,
    passengers: 5,
};

const flat = {
    location: 'downtown',
    rooms: 2,
    area: 56,
    bath: false,
    furniture: true,
};

const book = {
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    cover: 'firm',
    pages: 429,
    historical: false,
};

// 2. создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
const house = {
    space: [3, 200, 2.7, 7],
    outdors: {
        terrace: true,
        pool: false,
        garden: 'lemon tree',
    } ,
    garage: true,
    design: 'studio',
}

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

const toy = {
    color: 'brown',
    material: 'wood',
    for: {
        sex: 'male',
        age: 5,   
    },
    size: [4, 16, 8, 148],
};

const table = {
    producer: 'Spain',
    height: 1.2,
    elements: ['legs', 'shelf', 'top'],
    purshase: {
        pickup: true,
        delivery: false,
    }
};

const body = {
    sceleton: ['scalp', 'spine', 'arms', 'legs'],
    immune: true,
    parts: {
        nose: 1,
        ears: 2,
        fingers: 20,
    },
    bones: 206, 
};

// 3. При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (let value in dog) {
    console.log (value);
};
console.log ('________');


for (let value in human) {
    console.log (value);
};
console.log ('________');


for (let value in car) {
    console.log (value);
};
console.log ('________');


for (let value in flat) {
    console.log (value);
};
console.log ('________');


for (let value in book) {
    console.log (value);
};
console.log ('________');


for (let value in house) {
    console.log (value);
    console.log ('________');
};

for (let value in driver) {
    console.log (value);
};
console.log ('________');


for (let value in toy) {
    console.log (value);
};
console.log ('________');


for (let value in table) {
    console.log (value);
};
console.log ('________');


for (let value in body) {
    console.log (value);
};


// 4. При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
let keys1 = Object.keys (dog);
console.log (keys1);
console.log ('______');

let keys2 = Object.keys (human);
console.log (keys2);
console.log ('______');

let keys3 = Object.keys (car);
console.log (keys3);
console.log ('______');

let keys4 = Object.keys (flat);
console.log (keys4);
console.log ('______');

let keys5 = Object.keys (book);
console.log (keys5);
console.log ('______');

let keys6 = Object.keys (house);
console.log (keys6);
console.log ('______');

let keys7 = Object.keys (driver);
console.log (keys7);
console.log ('______');

let keys8 = Object.keys (toy);
console.log (keys8);
console.log ('______');

let keys9 = Object.keys (table);
console.log (keys9);
console.log ('______');

let keys10 = Object.keys (body);
console.log (keys10);
console.log ('______');


// 5. Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [{model: 'civic' , year: 2005, hp: 120, color: 'white'}, {model: 's', year: 2014, hp: 180, color: 'grey'}, {model: 'optima', year: 2001, hp: 110, color: 'red'}, {model: 'camry', year: 2007, hp: 135, color: 'black'}, {model: 'rav', year: 1997, hp: 100, color: 'silver'}, {model: 'accent', year: 2004, hp: 102, color: 'brown'}, {model: 'clubman', year: 2010, hp: 105, color: 'yellow'}, {model: 'gettz', year: 2013, hp: 95 , color: 'blue' }, {model: 3, year: 2017, hp: 160, color: 'green'}, {model: 'rio', year: 2002, hp: 110, color: 'purple'}];

// 6. Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [{name: 'Athens', population: 640000, country: 'Greece', region: 'Europe'}, {name: 'Beijing', population: 24500000, country: 'China', region: 'Asia'}, {name: 'Washington', population: 705749, country: 'USA', region: 'North America'}, {name: 'Rabat', population: 577827, country: 'Morocco', region: 'Africa'}];

// 7. Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let carz = [{model: 's', year: 2014, hp: 180, color: 'grey', driver: {name: 'Dan', age: 30, sex: 'male', experience: 1.2}},
    {model: 'camry', year: 2007, hp: 135, color: 'black', driver: {name: 'Aloise', age: 45, sex: 'female', experience: 15}},
    {model: 'accent', year: 2004, hp: 102, color: 'brown', driver: {name: 'Jane', age: 27, sex: 'female', experience: 3}},
    {model: 'rio', year: 2002, hp: 110, color: 'purple', driver: {name: 'Tom', age: 56, sex: 'male', experience: 23}},

];

// 8. проитерировать каждый массив из задания 5,6,7 при помощи while.
let i = 0;
while (i < cars.length) {
    console.log (cars[i]);
    i++;
};

let x = 0 ;
while (x < cities.length) {
    console.log (cities[x]);
    x++;
};

let y = 0 ;
while (y < carz.length) {
    console.log (carz[y]);
    y++;
};

// 9. проитерировать каждый массив из задания 5,6,7 при помощи for .
for ( let i = 0; i < cars.length; i++){
    console.log (cars[i]);
};

for ( let x = 0; x < cities.length; x++){
    console.log (cities[x]);
};

for ( let y = 0; y < carz.length; y++){
    console.log (carz[y]);
};

// 10. проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (i of cars) {
    console.log (i);
};

for (y of cities) {
    console.log (y);
};

for (x of carz) {
    console.log (x);
};

// 11. взять объекты из задания 1 и превратить каждый в json.
let d = JSON.stringify (dog);
let h = JSON.stringify (human);
let c = JSON.stringify (car);
let f = JSON.stringify (flat);
let b = JSON.stringify (book);

// 12. взять json из задания 11 и превратить их обратно в объекты.
let dog1 = JSON.parse (d);
let human1 = JSON.parse (h);
let car1 = JSON.parse (c);
let flat1 = JSON.parse (f);
let book1 = JSON.parse (b);

// 13. взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (i of cars) {
    let x = JSON.stringify (i);
    console.log (x);
}

// 14. взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (i of cities) {
    let x = JSON.stringify (i);
    console.log (x);
}

// 15. взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let newCars = []
for (i of carz) {
    let x = JSON.stringify (i);
    newCars.push(x);
};
console.log (newCars);


// 16. Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
const users = [{nickname: 'Riki', age: 18, level: 3, skills:['dexterity', 'charisma']}, {nickname: 'Chris', age: 21, level: 17, skills:['strenght', 'stamina']}, {nickname: 'Lex', age: 35, level: 23, skills:['sorcery', 'healing']}];
for (let i = 0; i < users.length; i++){
    console.log (users[i].nickname);
    for (let x = 0; x < users[i].skills.length; x++){ 
        console.log (users[i].skills[x]);
    }    
}

// 17. Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
const userSkills = [];
const users = [{nickname: 'Riki', age: 18, level: 3, skills:['dexterity', 'charisma']}, {nickname: 'Chris', age: 21, level: 17, skills:['strenght', 'stamina']}, {nickname: 'Lex', age: 35, level: 23, skills:['sorcery', 'healing']}];
for (let i = 0; i < users.length; i++){
    for (let x = 0; x < users[i].skills.length; x++){ 
    userSkills.push (users[i].skills[x]); };
};
console.log (userSkills);


// - 18. За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
 let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
for (let i = 0; i < users.length; i++){
    console.log (users[i].name);
    for (let x = 0; x < users[i].skills.length; x++){ 
        console.log (users[i].skills[x]);
    }    
}




            			let users = [{
            				name: 'vasya',
            				age: 31,
            				status: false,
            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			}, {
            				name: 'petya',
            				age: 30,
            				status: true,
            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			}, {
            				name: 'kolya',
            				age: 29,
            				status: true,
            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			}, {
            				name: 'olya',
            				age: 28,
            				status: false,
            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			}, {
            				name: 'max',
            				age: 30,
            				status: true,
            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			}, {
            				name: 'anya',
            				age: 31,
            				status: false,
            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			}, {
            				name: 'oleg',
            				age: 28,
            				status: false,
            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			}, {
            				name: 'andrey',
            				age: 29,
            				status: true,
            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			}, {
            				name: 'masha',
            				age: 30,
            				status: true,
            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			}, {
            				name: 'olya',
            				age: 31,
            				status: false,
            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			}, {
            				name: 'max',
            				age: 31,
            				status: true,
            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
                        }];
                        
//  // - 19. З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
const addresses = [];
 for (let i = 0; i < users.length; i++){
         addresses.push (users[i].address)
 };
 console.log (addresses)

// - 20. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (let i = 0; i < users.length; i++){ 
    let uDiv = users[i]; 
    let userDiv = document.createElement ('div');
    for (let x = 0; x < users[i].address.length; x++) {
        let userAddress = users[i].address[x];
 }
// я не смогла придумать как перенести данные из userAddress в userDiv, из-за этого задания 21-23 пришлось тоже отложить

 userDiv.innerText = 'name: ' + uDiv.name + ', age: ' + uDiv.age + ', status: ' + uDiv.status + ', address: ' + uDiv.address ;
 document.body.appendChild (userDiv);
};


// - 21. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


// - 22. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


// - 23. Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]





// -24. створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
let newDiv = document.createElement ('div');
newDiv.id = 'uniqueID';
newDiv.classList.add ('newClass');
newDiv.innerText = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе. Второе правило Бойцовского клуба: никогда никому не рассказывать о Бойцовском клубе. Третье правило Бойцовского клуба: в схватке участвуют только двое. Четвертое правило Бойцовского клуба: не более одного поединка за один раз.';
document.body.appendChild (newDiv);

// -25. змінити цей текст використовуючи селектори id, class,  tag
let divChange = document.getElementById ('uniqueID');
divChange.innerText = 'Пятое правило Бойцовского клуба: бойцы сражаются без обуви и голые по пояс.';

let divChange1 = document.getElementsByClassName ('newClass');
divChange1[0].innerText = 'Шестое правило Бойцовского клуба: поединок продолжается столько, сколько потребуется.';

let divChange2 = document.getElementsByTagName ('div');
divChange2[0].innerText = 'Седьмое правило Бойцовского клуба : если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'

// -26. змінити висоту та ширину блоку використовуючи селектори id, class,  tag
let divChange = document.getElementById ('uniqueID');
divChange.style.height = '200px';
divChange.style.width = '1000px';

let divChange1 = document.getElementsByClassName ('newClass');
divChange1[0].style.height = '100px';
divChange1[0].style.width = '800px';

let divChange2 = document.getElementsByTagName ('div');
divChange2[0].style.height = '150px';
divChange2[0].style.width = '600px';
