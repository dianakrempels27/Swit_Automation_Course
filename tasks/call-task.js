const username = {firstName: "Вася"};
let user = {
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
  };
user.sayHi.call(username);