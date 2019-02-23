
/*Напишите скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается логин через prompt:

Если посетитель нажал Cancel — записать в message строку 'Отменено пользователем!'
В протовном случае, если введенное значение не совпадает со значением константы ADMIN_LOGIN, записать в message строку 'Доступ запрещен, неверный логин!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, спрашивать пароль через prompt.
При вводе пароля:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который не совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Доступ запрещен, неверный пароль!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Добро пожаловать!'
После всех проверок вывести в alert значение переменной message.

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

*/

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const Cancel = 'Отменено пользователем!';
const wrongRegistration = 'Доступ запрещен, неверный пароль!';
const okRegistration = 'Добро пожаловать!';

const inputLogin = prompt("Your login:");
if (inputLogin === null) {
    alert(Cancel);
}
 else if (inputLogin !== ADMIN_LOGIN) {
    alert(wrongRegistration);
}
else {     
    const inputPassword = prompt("Your password:");
    if (inputPassword === null) {
    alert(Cancel);
    }
 else if (inputPassword !== ADMIN_PASSWORD) {
    alert(wrongRegistration);
    } else {
    alert(okRegistration);
    }
}