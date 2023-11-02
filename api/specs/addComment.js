const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("add comment to the post created by API", () => {
    it("should be return status 200 after adding comment to the post by API", async () => {
        const body = {
            "image": {},
            "title": "Test post via API",
            "description": "hello everyone!",
            "content": "Have a good day :)"
        };
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTEwMmFmYWZkNTZhMjYzZDhmMTMxNTQiLCJpYXQiOjE2OTg2ODU3NjQsImV4cCI6MTcwMTI3Nzc2NH0.ji6LPkV9hTOW9C25-rh7GxBgMdfCBB3uYLff9r4oFug";
        const createPostByAPI = await usersEndpoints.createPost(`Bearer ${token}`, body);
        const requestBody = {
            "post": "65268f3bfd56a263d8f13601",
            "text": "great post!"
        };
        const addComment = await usersEndpoints.addPost(`Bearer ${token}`, requestBody);
        console.log(createPostByAPI.statusCode);
        console.log(addComment.statusCode);
        expect(addComment.statusCode).to.be.eql(200);
    });
});