const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("login API", () => {
    it("should be return status 200 after valid credentials are provided", async () => {
        const loginUser = await usersEndpoints.login("diana.krempels1", "09Tirogo&");
        console.log(loginUser.statusCode);
        console.log(loginUser._body);
        expect(loginUser.statusCode).to.be.eql(200);
    });
});