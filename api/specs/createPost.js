const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;
const moment = require("moment");
const { faker } = require('@faker-js/faker');

describe("create post by API", () => {
    it("should be return status 200 after creating a post by API", async () => {
        //login as real user
        const loginUser = await usersEndpoints.login("diana.krempels1", "09Tirogo&");
        //беремо токен, щоб використовувати в інших ендпоінтах
        token = loginUser._body.token;
        let title = moment().unix();
        let description = faker.lorem.sentence();
        const body = {
            "image": {
                "0": {}
            },
            "title": title,
            "description": description,
            "content": "jkdjdn",
            "imageUrl": "/uploads/image-1699637426202-936072770.jpg"
        };
        //create post by API
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        console.log(createPostByAPI._body);
        expect(createPostByAPI.statusCode).to.be.eql(200);
        //title into string
        expect(createPostByAPI._body.title).to.be.eql(title + "");
        expect(createPostByAPI._body.description).to.be.eql(description);
        //get all posts
        const getPosts = await usersEndpoints.getPosts(`Bearer ${token}`);
        //знаходили індекс поста (обʼєкта)
        const getPostIndex = getPosts._body.findIndex((element) => element.title === title + "");
        //перевіряємо, що індекс існує
        expect(getPostIndex).not.to.be.eql(-1);
        console.log(getPostIndex);
    });
});