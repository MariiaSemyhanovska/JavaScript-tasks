// -1. створити функцію яка виводить масив
const array = [1,4,6,7,12,17]
function arrDisplay (arr) {
    console.log (arr);
};
arrDisplay (array);


// -2. створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
let range = [];
function arrCreate (lenght, min, max) {
    for (let i = 0; i < lenght ; i++) {
    range.push(Math.floor(Math.random()*(max - min) + min));
    }
    function arrDisplay (arr) {
        console.log (arr);
    };
    arrDisplay (range);
};
arrCreate (12, 5, 100);


// -3. створити функцію яка приймає три числа та виводить та повертає найменьше.
function min (one, two, three) {
    return Math.min(one, two, three);
};
let minResult = min (3, 104, 19);
console.log (minResult);

// -4. створити функцію яка приймає три числа та виводить та повертає найбільше.

function max (one, two, three) {
    return Math.max (one, two, three);
};
let maxResult = max (3, 104, 19);
console.log (maxResult)

// -5. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function numbers () {
 let max = arguments[0];
 let min = arguments[0];
 for (num of arguments){
     if (max < num) {max = num};
     if (min > num) {min = num};
 }
 console.log (max);
return min;
};
let minNumber = numbers (14, 5, 12, 28, 146, 294, 8);
console.log (minNumber);

// -6. створити функцію яка виводить масив
const array = [1,4,6,7,12,17]
function arrDisplay (arr) {
    console.log (arr);
};
arrDisplay (array);

// -7. створити функцію яка повертає найбільше число з масиву
const array = [1,4,6,7,12,17]
function arrMax (arr){
let max = arr[0];
for (item of arr){
    if (item > max) {max = item};
}
return max;
};
let biggestArr = arrMax (array);
console.log (biggestArr);

// -8. створити функцію яка повертає найменьше число з масиву
const array = [1,4,6,7,12,17];
function arrMin (arr){
let min = arr[0];
for (item of arr){
    if (item < min) {min = item};
}
return min;
};
let minArray = arrMin (array);
console.log (minArray);

// -9. створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
const array = [1, 4, 6, 7, 12, 17];
function sumator (arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    return sum;
};
let finalSum = sumator (array);
console.log (finalSum);


// -10. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const range = [1, 4, 6, 7, 12, 17];
function arithMean (arr){
    let sum = sumator (arr);
    return sum / arr.length;
};
let finalAmount = arithMean (range);
console.log (finalAmount);

// -11. Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
const bakery = ['cookie', {milk:'soy', cream: 'coconut'}, true, 5, ['flour', 'dough', 'egg'], 'oz'];
function lengthDisplay (arr){
    let count = 0;
    for (arrItem of arr){
        if (typeof arrItem === 'object'){
            count++;
        };
    };
    return count;
};
let arrayLength = lengthDisplay (bakery);
console.log (arrayLength);

// -12. Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function keysDisplay (arr){
    let count = 0;
    for (arrItem of arr){
        if (typeof arrItem === 'object'){
            for (key in arrItem){ 
            count++;
            }
        };
    };
    return count;
};
let keysAmount = keysDisplay (bakery);
console.log (keysAmount);
// массивы тут можно учитывать или только объекты?

// -13. створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
const array1 = [1,5,3,8,4];
const array2 = [3,6,9,1,7];
function arraySum (arr1, arr2){
    const arrayResult = [];
    for (i = 0; i < arr1.length; i++){
            arrayResult.push (arr1[i]+arr2[i]);
    };
    return arrayResult;
};
let arrayResults = arraySum (array1, array2);
console.log (arrayResults);

//14. Створити функцію яка :
// -14.1  Додає в боді блок з текстом "Hello owu"
function addDiv (){
    let div = document.createElement ('div');
    div.innerText = 'Hello owu';
    document.body.appendChild (div);
}
addDiv ();
// -14.2 Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addObject (type, text){
    let object = document.createElement (type);
    object.innerText = text;
    document.body.appendChild (object);
};
addObject ('div', 'Hello honey!')

// -14.3 приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [{model: 'civic' , year: 2005, hp: 120, color: 'white'}, {model: 'optima', year: 2001, hp: 110, color: 'red'}, {model: 'camry', year: 2007, hp: 135, color: 'black'}, {model: 'rav', year: 1997, hp: 100, color: 'silver'}, {model: 'accent', year: 2004, hp: 102, color: 'brown'}, {model: 'clubman', year: 2010, hp: 105, color: 'yellow'}];
function addCar (arr, id){
    let listDiv = document.getElementById (id);
    let list = document.createElement ('ul');
    for (i = 0; i < arr.length; i++){
        let listItem = arr[i];
        let itemInfo = '';
        let itemValues = Object.values(arr[i]);
        for (itemPart of itemValues) {
            itemInfo = itemInfo + ' ' + itemPart;
        }
        let li = document.createElement ('li');
        li.innerHTML = itemInfo;
        list.appendChild (li);    
    };
    listDiv.appendChild (list);
};
addCar (cars, 'carList')

// 14.4 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars = [{model: 'civic' , year: 2005, hp: 120, color: 'white'}, {model: 'optima', year: 2001, hp: 110, color: 'red'}, {model: 'camry', year: 2007, hp: 135, color: 'black'}, {model: 'rav', year: 1997, hp: 100, color: 'silver'}, {model: 'accent', year: 2004, hp: 102, color: 'brown'}, {model: 'clubman', year: 2010, hp: 105, color: 'yellow'}];
function addCar (arr, id){
    let listDiv = document.getElementById (id);
    for (i = 0; i < arr.length; i++){
        let itemInfo = '';
        let itemValues = Object.values(arr[i]);
        for (itemPart of itemValues) {
            itemInfo = itemInfo + ' ' + itemPart;
        }
        let carDiv = document.createElement ('div');
        carDiv.innerHTML = itemInfo;
        listDiv.appendChild (carDiv);    
    };
};
addCar (cars, 'carList');

// 14.5 приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
let cars = [{model: 'civic' , year: 2005, hp: 120, color: 'white'}, {model: 'optima', year: 2001, hp: 110, color: 'red'}, {model: 'camry', year: 2007, hp: 135, color: 'black'}, {model: 'rav', year: 1997, hp: 100, color: 'silver'}, {model: 'accent', year: 2004, hp: 102, color: 'brown'}, {model: 'clubman', year: 2010, hp: 105, color: 'yellow'}];
function addCar (arr, id){
    let listDiv = document.getElementById (id);
    let carDiv  = document.createElement ('div');
    for (i = 0; i < arr.length; i++){
        let car = arr[i];
        for (parameter in car){
            let parameterDiv = document.createElement ('div');
            parameterDiv.innerText = car[parameter];
            carDiv.appendChild (parameterDiv);
        };
        listDiv.appendChild (carDiv);    
    };
};
addCar (cars, 'carList');


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

        function combine (arr1, arr2){
            let arr3 = [];
                for (user of arr1){
                    for (city of arr2){
                        if (user.id === city.user_id){
                            user.address = city;
                            arr3.push (user);
                            };
                     };
                };
                return arr3;
        };
    let usersWithCities = combine (usersWithId, citiesWithId);
    console.log (usersWithCities);   
