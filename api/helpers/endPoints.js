const BaseRequest = require("./baseRequest");

class UsersEndpoins extends BaseRequest {
  constructor() {
    super();
  }

  getUser(token) {
    return this.get("https://unit1105.p-host.kiev.ua", "/user", {
      "Content-Type": "application/json",
      "Authorization":token
    });
  }

  login(login, password) {
    return this.post("https://unit1105.p-host.kiev.ua", "/post", {
      "Content-Type": "application/json",
    }, {
      "login": login,
      "password": password
    })
  }

  createPost(body) {
    return this.createPost("https://unit1105.p-host.kiev.ua", "/post/65268f3bfd56a263d8f13601", {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBjMzA3ZWZkNTZhMjYzZDhmMTMwY2UiLCJpYXQiOjE2OTU5OTU2NTUsImV4cCI6MTY5ODU4NzY1NX0.djx6IjciUyQlNilvGhFuQAKHyyyNIw2RevQLelYmbzI"
    }, body)
  }
}

let usersEndpoints = new UsersEndpoins();

module.exports =  usersEndpoints;