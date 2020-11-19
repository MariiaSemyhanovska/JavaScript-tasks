// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let lorem = document.getElementById ('content');
console.log (lorem);

// - отримує текст з блоку з id "rules"
let rulestxt = document.getElementById ('rules');
console.log (rulestxt);

// - замініть текст параграфа з id 'content' на будь-який інший
lorem.innerText = 'Fight club'; 

// - замініть текст параграфа з id 'rules' на будь-який інший
rulestxt.innerText = 'The first rule of Fight Club is: You do not talk about Fight Club. The second rule of Fight Club is: You do not talk about Fight Club. Third rule of Fight Club: Someone yells "Stop!", goes limp, taps out, the fight is over. Fourth rule: Only two guys to a fight.';

// - змініть кожному елементу колір фону на червоний
lorem.style.backgroundColor = 'red';
rulestxt.style.backgroundColor = 'red';
let list = document.getElementsByTagName ('li');
for (let li of list) {
    li.style.backgroundColor = 'red';
};

// - змініть кожному елементу колір тексту на синій
lorem.style.color = 'blue';
rulestxt.style.color = 'blue';
for (let li of list) {
    li.style.color = 'blue';
};

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log (rulestxt.classList);

// - отримати всі елементи з класом fc_rules
let classes = document.getElementsByClassName ('fc_rules');
console.log (classes);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (item of classes) {
    item.style.color = 'red';
}