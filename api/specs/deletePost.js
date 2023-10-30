const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe ("delete post by API request", () => {
    it("should be return status 200 after deleting a post by API", async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTEwMmFmYWZkNTZhMjYzZDhmMTMxNTQiLCJpYXQiOjE2OTg2ODU3NjQsImV4cCI6MTcwMTI3Nzc2NH0.ji6LPkV9hTOW9C25-rh7GxBgMdfCBB3uYLff9r4oFug";
        const deletePost = await usersEndpoints.deletePost(`Bearer ${token}`);
        console.log(deletePost.statusCode);
        expect(deletePost.statusCode).to.be.eql(200);
    })
})