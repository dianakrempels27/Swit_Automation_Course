const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("edit post created by API", () => {
    it("should be return status 200 after editing post by API", async () => {
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
                "image": {},
                "title": "Test post via API",
                "description": "Hello everyone!",
                "content": "Have a good day :)"
        };
        const editPost = await usersEndpoints.editPost(`Bearer ${token}`, requestBody);
        console.log(createPostByAPI.statusCode);
        console.log(editPost.statusCode);
        expect(editPost.statusCode).to.be.eql(200);
    });
});