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
    return this.post("https://unit1105.p-host.kiev.ua", "/login", {
      "Content-Type": "application/json",
    }, {
      "login": login,
      "password": password
    });
  }

  createPost(token, body) {
    return this.put("https://unit1105.p-host.kiev.ua", "/post/65268f3bfd56a263d8f13601", {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }, body)
  }

  deletePost(token) {
    return this.delete("https://unit1105.p-host.kiev.ua", "/post/6536b803fd56a263d8f13854", {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    })
  }

  addPost(token, body) {
    return this.post("https://unit1105.p-host.kiev.ua", "/comment", {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }, body)
  }
}

let usersEndpoints = new UsersEndpoins();

module.exports =  usersEndpoints;