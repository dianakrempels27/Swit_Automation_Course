const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe("login API", () => {
    it("should be return status 200 after valid credentials are provided", async () => {
        const login = await usersEndpoints.post("diana.krempels1", "09Tirogo&");
        console.log(login.statusCode);
        expect(login.statusCode).to.be.eql(200);
        expect(login.body).to.be.eql("diana.krempels1");
    });
});