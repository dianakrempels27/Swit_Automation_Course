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
}

let usersEndpoints = new UsersEndpoins();

module.exports =  usersEndpoints;