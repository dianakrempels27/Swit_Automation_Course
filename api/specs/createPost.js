const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("create post by API", () => {
    it("should be return status 200 after creating a post by API", async () => {
        const body = {
            "image": {},
            "title": "Test post via API",
            "description": "hello everyone!",
            "content": "Have a good day :)"
        };
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTEwMmFmYWZkNTZhMjYzZDhmMTMxNTQiLCJpYXQiOjE2OTg5MjUzNTAsImV4cCI6MTcwMTUxNzM1MH0.mqNaiSBzywjB4PpIOn1X3vpviKOcbdZB4W8d67jXkII";
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        console.log(createPostByAPI.statusCode);
        expect(createPostByAPI.statusCode).to.be.eql(200);
    });
});