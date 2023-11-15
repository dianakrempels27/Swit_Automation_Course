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
    return this.post("https://unit1105.p-host.kiev.ua", "/post", {
      "Content-Type": "application/json",
      "Authorization": token,
    }, body)
  }

  deletePost(token, idPost) {
    return this.delete("https://unit1105.p-host.kiev.ua", `/post/${idPost}`, {
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

  editPost(token, idPost, body) {
    return this.put("https://unit1105.p-host.kiev.ua", `/post/${idPost}`, {
      "Content-Type": "application/json",
      "Authorization": token,
    }, body)
  }

  getPosts(token) {
    return this.get("https://unit1105.p-host.kiev.ua", "/post", {
      "Content-Type": "application/json",
      "Authorization": token,
    })
  }

  getComments(token, idPost) {
    return this.get("https://unit1105.p-host.kiev.ua", `/comment/${idPost}`, {
      "Content-Type": "application/json",
      "Authorization": token,
    })
  }
}

let usersEndpoints = new UsersEndpoins();

module.exports =  usersEndpoints;