// ==============================================
// - 1.  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

function tagDescription (title, actions, attributes){
    this.title = title;
    this.actions = actions;
    this.attributes = attributes;
};

let tagA = new tagDescription ('a', 'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.', [{name: 'accesskey', actions: 'Активация ссылки с помощью комбинации клавиш.'}, {name: 'coords', actions: 'Устанавливает координаты активной области.'}]);
console.log (tagA);

let tagDiv = new tagDescription ('div', 'Предназначен для выделения фрагмента документа с целью изменения вида содержимого', [{name: 'align', actions: 'Задает выравнивание содержимого тега <div>.'}, {name: 'title', actions: 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log (tagDiv);

let tagH1 = new tagDescription ('h1', 'Представляет собой наиболее важный заголовок первого уровня', [{name: 'align', actions: 'Определяет выравнивание заголовка.'}]);
console.log (tagH1);

let tagSpan = new tagDescription ('span', 'Предназначен для определения строчных элементов документа.', [{name: 'accesskey', actions: 'Активация с помощью комбинации клавиш.'}, {name: 'title', actions: 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log (tagSpan);

let tagInput = new tagDescription ('input', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{name: 'align', actions: 'Определяет выравнивание изображения.'}, {name: 'accesskey', actions: 'Переход к элементу с помощью комбинации клавиш.'}]);
console.log (tagInput);

let tagForm = new tagDescription ('form', 'Форма предназначена для обмена данными между пользователем и сервером.', [{name: 'action', actions: 'Адрес программы или документа, который обрабатывает данные формы'}, {name: 'autocomplete', actions: 'Включает автозаполнение полей формы.'}]);
console.log (tagForm);

let tagOption = new tagDescription ('option', 'Oпределяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{name: 'label', actions: 'Указание метки пункта списка'}, {name: 'value', actions: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}]);
console.log (tagOption);

let tagSelect = new tagDescription ('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', [{name: 'autofocus', actions: 'Устанавливает, что список получает фокус после загрузки страницы.'}, {name: 'form', actions: 'Связывает список с формой.'}]);
console.log (tagSelect);


// ==============================================
// - 2.  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

class tagDescriptions {
    constructor (title, actions, attributes){
        this.title = title;
        this.actions = actions;
        this.attributes = attributes
    };
};

let tagA = new tagDescriptions ('a', 'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.', [{name: 'accesskey', actions: 'Активация ссылки с помощью комбинации клавиш.'}, {name: 'coords', actions: 'Устанавливает координаты активной области.'}]);
console.log (tagA);

let tagDiv = new tagDescriptions ('div', 'Предназначен для выделения фрагмента документа с целью изменения вида содержимого', [{name: 'align', actions: 'Задает выравнивание содержимого тега <div>.'}, {name: 'title', actions: 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log (tagDiv);

let tagH1 = new tagDescriptions ('h1', 'Представляет собой наиболее важный заголовок первого уровня', [{name: 'align', actions: 'Определяет выравнивание заголовка.'}]);
console.log (tagH1);

let tagSpan = new tagDescriptions ('span', 'Предназначен для определения строчных элементов документа.', [{name: 'accesskey', actions: 'Активация с помощью комбинации клавиш.'}, {name: 'title', actions: 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log (tagSpan);

let tagInput = new tagDescriptions ('input', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{name: 'align', actions: 'Определяет выравнивание изображения.'}, {name: 'accesskey', actions: 'Переход к элементу с помощью комбинации клавиш.'}]);
console.log (tagInput);

let tagForm = new tagDescriptions ('form', 'Форма предназначена для обмена данными между пользователем и сервером.', [{name: 'action', actions: 'Адрес программы или документа, который обрабатывает данные формы'}, {name: 'autocomplete', actions: 'Включает автозаполнение полей формы.'}]);
console.log (tagForm);

let tagOption = new tagDescriptions ('option', 'Oпределяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{name: 'label', actions: 'Указание метки пункта списка'}, {name: 'value', actions: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}]);
console.log (tagOption);

let tagSelect = new tagDescriptions ('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', [{name: 'autofocus', actions: 'Устанавливает, что список получает фокус после загрузки страницы.'}, {name: 'form', actions: 'Связывает список с формой.'}]);
console.log (tagSelect);

// ==============================================
// -3. Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let car = {
    model: 'Optima',
    producer: 'Engine motors',
    year: 2002,
    maxSpeed: 210,
    engine: 1.6,

    drive(){
        console.log (`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    },
    info(){
        console.log (car);
    },
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log (this.maxSpeed);
    },
    changeYear (newValue){
        this.year = newValue;
        console.log (this.year);
    },
    addDriver (driver){
        this.driver = driver; 
        console.log (car);
        // или нужно было, чтобы функция добавляла заранее прописанный объект?
    }
};

car.drive ();
car.info();
car.increaseMaxSpeed (20);
car.changeYear (2006);
car.addDriver({name: 'Victor', age: 41, experience: 17})


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
 function car (model, producer, year, maxSpeed, engine){
     this.model = model;
     this.producer = producer;
     this.year = year;
     this.maxSpeed = maxSpeed;
     this.engine = engine;

    this.drive = function(){
        console.log (`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    };
    this.info = function(){
        console.log (this);
    };
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log (this.maxSpeed);
    };
    this.changeYear = function(newValue){
        this.year = newValue;
        console.log (this.year);
    };
    this.addDriver = function(driver){
        this.driver = driver; 
        console.log (this); 
    };

 };

let Mazda = new car ('M5', 'Auto Motors', 2012, 190, 1.2)
Mazda.drive ();
Mazda.info();
Mazda.increaseMaxSpeed (20);
Mazda.changeYear (2006);
Mazda.addDriver({name: 'Victor', age: 41, experience: 17})



// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class car {
    constructor (model, producer, year, maxSpeed, engine){
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;

   this.drive = function(){
       console.log (`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
   };
   this.info = function(){
       console.log (this);
   };
   this.increaseMaxSpeed = function(newSpeed){
       this.maxSpeed = this.maxSpeed + newSpeed;
       console.log (this.maxSpeed);
   };
   this.changeYear = function(newValue){
       this.year = newValue;
       console.log (this.year);
   };
   this.addDriver = function(driver){
       this.driver = driver; 
       console.log (this); 
   };

};

};

let Mazda = new car ('M5', 'Auto Motors', 2012, 190, 1.2)
Mazda.drive ();
Mazda.info();
Mazda.increaseMaxSpeed (20);
Mazda.changeYear (2006);
Mazda.addDriver({name: 'Victor', age: 41, experience: 17})




// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class person {
    constructor (name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
};


class cinderella extends person {
    constructor (name, age, footSize){
    super (name, age, footSize);
    };
};

let girl = new cinderella ('Elsa', 17, 36);
let girl1 = new cinderella ('Ariel', 19, 40);
let girl2 = new cinderella ('Anastasia', 16, 38);
let girl3 = new cinderella ('Joe', 15, 35);
let girl4 = new cinderella ('Belle', 18, 39);
let girl5 = new cinderella ('Zoe', 17, 37);
let girl6 = new cinderella ('Chris', 18, 38);
let girl7 = new cinderella ('Liana', 20, 36);
let girl8 = new cinderella ('Jess', 16, 37);
let girl9 = new cinderella ('Dina', 17, 39);
const cinderellas = [girl, girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9];


class prince extends person {
    constructor (name, age, shoeSize){
    super (name, age);
    this.shoeSize = shoeSize;
    };
};
let mainPrince = new prince ('Eric', 19, 40);

for (lady of cinderellas){
    if (lady.footSize === mainPrince.shoeSize){
        console.log (`My cinderella is ${lady.name}`);
    };
};


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function cinderella (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
};

let girl = new cinderella ('Elsa', 17, 36);
let girl1 = new cinderella ('Ariel', 19, 40);
let girl2 = new cinderella ('Anastasia', 16, 38);
let girl3 = new cinderella ('Joe', 15, 35);
let girl4 = new cinderella ('Belle', 18, 39);
let girl5 = new cinderella ('Zoe', 17, 37);
let girl6 = new cinderella ('Chris', 18, 38);
let girl7 = new cinderella ('Liana', 20, 36);
let girl8 = new cinderella ('Jess', 16, 37);
let girl9 = new cinderella ('Dina', 17, 39);
const cinderellas = [girl, girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9];

function prince (name, age, shoeSize){
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
};

let mainPrince = new prince ('Eric', 19, 40);

function findCinderella (array){
    for (lady of array){
        if (lady.footSize === mainPrince.shoeSize){
            console.log (`My cinderella is ${lady.name}`);
        };
    };
};
findCinderella (cinderellas);