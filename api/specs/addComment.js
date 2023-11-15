const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;
const moment = require("moment");
const { faker } = require('@faker-js/faker');

describe("add comment to the post created by API", () => {
    it("should be return status 200 after adding comment to the post by API", async () => {
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
        const requestBody = {
            "post": idPost,
            "text": "Awesome post!"
        };
        const addComment = await usersEndpoints.addComment(`Bearer ${token}`, requestBody);
        console.log(addComment.statusCode);
        expect(addComment.statusCode).to.be.eql(200);
        const getComments = await usersEndpoints.getComments(`Bearer ${token}`, idPost);
        const getComment = getComments._body.findIndex((element) => element.text === "Awesome post!");
        expect(getComment).not.to.be.eql(-1);
        console.log(getComment);
    });
});