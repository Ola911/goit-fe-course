/*
Напишите скрипт со следующим функционалом:

- При загрузке страницы пользователю предлагается в prompt ввести число. Это число добавляется в массив чисел numbers.
- Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel 
в prompt. Используйте цикл do...while.
- После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех 
элементов массива и записать ее в переменную total. Используйте цикл for или for...of. После чего вывести alert с 
текстом 'Общая сумма чисел равна <сумма>'
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. 
Если хотите, в случае некорректного ввода, покажите alert с текстом 'Было введено не число, попробуйте еще раз', 
при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести 
число в prompt.

*/


let userInput;
const numbers = [];
let total = 0;

let currentNumber;
let numbersCounter = 0;

do {
    userInput = prompt("Введите число");
    currentNumber = Number(userInput);
    numbersCounter += 1;
    if (userInput === null) {
        break;
    } else if (Number.isNaN(currentNumber)) {
        alert("Было введено не число, попробуйте еще раз");
    } else {
        numbers.push(currentNumber);
    }
} while (userInput !== null);
    for (let Num of numbers) {
        total += Num;
    }

alert(`Общая сумма чисел равна ${total}`);



