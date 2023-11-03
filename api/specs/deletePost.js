const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe ("delete post by API request", () => {
    it("should be return status 200 after deleting a post by API", async () => {
        const loginUser = await usersEndpoints.login("diana.krempels1", "09Tirogo&");
        token = loginUser._body.token;
        const deletePost = await usersEndpoints.deletePost(`Bearer ${token}`);
        console.log(deletePost.statusCode);
        expect(deletePost.statusCode).to.be.eql(200);
    })
})