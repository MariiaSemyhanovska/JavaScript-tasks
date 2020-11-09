//--створити масив та вивести його в консоль:
//- з 5 числових значень
const pi = [3, 14, 15, 92, 6];
console.log(pi); 

// - з 5 стічкових значень
const community = ['Helen', 'Max', 'Kate', 'Ann', 'Alex'];
console.log (community);

// - з 5 значень стрічкового, числового та булевого типу
const car = ['wheel', 60, true, 'white', 4];
console.log (car);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const empty = [];
for (let i = 0; i < 20 ; i += 2) {
    empty[i] = i;
    console.log (empty)
}; 

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write ('<div>JavaScript is awesome</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write ('<div>День без сладкого №' + i + '</div>');
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while ( i < 20 ) {
    document.write ('<h1>Task is done</h1>');
    i++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 1;
while ( i <= 20 ) {
    document.write ('<h1>Task №' +i+ ' is done</h1>');
    i++;
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numb = [10, 25, 40, 55, 70, 85, 100, 115, 130, 145]
for (let i = 0; i < 10 ; i++) {
    console.log (numb[i])
}

//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const community = ['Helen', 'Max', 'Kate', 'Ann', 'Alex', 'Eve', 'Dan', 'Cloe', 'Lucy', 'Rick'];
for (let i = 0; i < 10 ; i++) {
  console.log (community[i]);
}

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const car = ['wheel', 60, true, 'white', 4, false, 27, 'engine', true, 'speed'];
for (let i = 0; i < 10 ; i++) {
    console.log (car[i]);
 }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const bakery = [];
bakery[0] ='cookie';
bakery[1] = {milk:'soy', cream: 'coconut'};
bakery[2] = true;
bakery[3] = 5;
bakery[4] = 'cake';
bakery[5] = ['flour', 'dough', 'egg'];
bakery[6] = false;
bakery[7] = 28;
bakery[8] = 'oz';
bakery[9] = 'ml';
console.log (bakery)

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 10 ; i++) {
    console.log (i);
    document.write ('Шаг №'+i);
    document.write ('<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100 ; i++) {
    console.log (i);
    document.write ('Шаг №'+i);
    document.write ('<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200 ; i += 2) {
    console.log (i/2+1);
    document.write ('Шаг №'+(i/2+1));
    document.write ('<br>');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i <= 100 ; i++) {
    if (i % 2 == 0) {
    console.log (i);
    document.write ('Шаг №'+i);
    }
    document.write ('<br>');
 }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i <= 100 ; i++) {
    if (i % 2 !== 0) {
    console.log (i);
    document.write ('Шаг №'+i);
    }
    document.write ('<br>');
 }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let i_min = 0; i_min < 2; i_min++) {
    for (let i_sec = 0; i_sec < 60; i_sec++) {
        console.log (i_min + ':' + i_sec);
    }

}

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let i_hour = 0; i_hour < 3; i_hour++) {
    for (let i_min = 0; (i_min < 60 && i_hour < 2) || (i_min < 20 && i_hour == 2); i_min++) {
        for (let i_sec = 0; i_sec < 60; i_sec++) {
            console.log (i_hour + ':' + i_min + ':' + i_sec);
        }
    }  
}