//Створити клас логін сторінки
//Клас повинен містити конструктор з локаторами всіх полей - логін, пароля та кнопки натиску
//Створити метод login;
 
class LoginPage {
    constructor () {
        this.loginField = $("[placeholder='Логін']");
        this.password = $("[placeholder='Пароль']");
        this.button = $("[type='submit']");
    }

    login(username, password) {
        this.loginField.val(username);
        this.password.val(password);
        this.button.click();
    }
}