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
    return this.put("https://unit1105.p-host.kiev.ua", "/post/6544c095fd56a263d8f13bda", {
      "Content-Type": "application/json",
      "Authorization": token,
    }, body)
  }

  deletePost(token) {
    return this.delete("https://unit1105.p-host.kiev.ua", "/post/6544c095fd56a263d8f13bda", {
      "Content-Type": "application/json",
      "Authorization": token,
    })
  }

  addComment(token, body) {
    return this.post("https://unit1105.p-host.kiev.ua", "/comment", {
      "Content-Type": "application/json",
      "Authorization": token,
    }, body)
  }

  editPost(token, body) {
    return this.put("https://unit1105.p-host.kiev.ua", "/post/6544c095fd56a263d8f13bda", {
      "Content-Type": "application/json",
      "Authorization": token,
    }, body)
  }
}

let usersEndpoints = new UsersEndpoins();

module.exports =  usersEndpoints;