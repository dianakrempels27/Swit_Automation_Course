const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("add comment to the post created by API", () => {
    it("should be return status 200 after adding comment to the post by API", async () => {
        const loginUser = await usersEndpoints.login("diana.krempels1", "09Tirogo&");
        token = loginUser._body.token;
        const body = {
            "image": {},
            "title": "Test post via API",
            "description": "hello everyone!",
            "content": "Have a good day :)"
        };
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        const requestBody = {
            "post": "65268f3bfd56a263d8f13601",
            "text": "great post!"
        };
        const addComment = await usersEndpoints.addComment(`Bearer ${token}`, requestBody);
        console.log(createPostByAPI.statusCode);
        console.log(addComment.statusCode);
        expect(addComment.statusCode).to.be.eql(200);
    });
});