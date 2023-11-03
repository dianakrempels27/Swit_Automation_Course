const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("create post by API", () => {
    it("should be return status 200 after creating a post by API", async () => {
        const loginUser = await usersEndpoints.login("diana.krempels1", "09Tirogo&");
        token = loginUser._body.token;
        const body = {
            "image": {},
            "title": "Test post via API",
            "description": "hello everyone!",
            "content": "Have a good day :)"
        };
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        console.log(createPostByAPI.statusCode);
        expect(createPostByAPI.statusCode).to.be.eql(200);
    });
});