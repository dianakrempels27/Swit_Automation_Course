const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("create post by API", () => {
    it("should be return status 200 after creating a post by API", async () => {
        const createPostByAPI = await usersEndpoints.createPost({
            "image": {},
            "title": "Test post via API",
            "description": "hello everyone!",
            "content": "Have a good day :)"
        });
        console.log(createPostByAPI.statusCode);
        expect(createPostByAPI.statusCode).to.be.eql(200);
    });
});