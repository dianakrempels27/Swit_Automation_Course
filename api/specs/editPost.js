const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;
const moment = require("moment");
const { faker } = require('@faker-js/faker');

describe("edit post created by API", () => {
    it("should be return status 200 after editing post by API", async () => {
        const loginUser = await usersEndpoints.login("diana.krempels1", "09Tirogo&");
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
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        idPost = createPostByAPI._body._id;
        let newTitle = moment().unix();
        const requestBody = {
                "image": {},
                "title": newTitle,
                "description": description,
                "content": "Have a good day :)"
        };
        const editPost = await usersEndpoints.editPost(`Bearer ${token}`, idPost, requestBody);
        console.log(editPost.statusCode);
        expect(editPost.statusCode).to.be.eql(200);
        const getPosts = await usersEndpoints.getPosts(`Bearer ${token}`);
        const getPostIndex = getPosts._body.findIndex((element) => element.title === newTitle + "");
        expect(getPostIndex).not.to.be.eql(-1);
        console.log(getPostIndex);
    });
});