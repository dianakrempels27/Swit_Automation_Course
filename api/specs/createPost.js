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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTEwMmFmYWZkNTZhMjYzZDhmMTMxNTQiLCJpYXQiOjE2OTg2ODU3NjQsImV4cCI6MTcwMTI3Nzc2NH0.ji6LPkV9hTOW9C25-rh7GxBgMdfCBB3uYLff9r4oFug";
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        console.log(createPostByAPI.statusCode);
        expect(createPostByAPI.statusCode).to.be.eql(200);
    });
});