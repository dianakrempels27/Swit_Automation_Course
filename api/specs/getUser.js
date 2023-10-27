const usersEndpoints = require("../helpers/endPoints");
const expect = require("chai").expect;

describe ("get user by API request", () => {
    it("should be return correct details for user", async () => {
        const user = await usersEndpoints.getUser("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBjMzA3ZWZkNTZhMjYzZDhmMTMwY2UiLCJpYXQiOjE2OTU5OTU2NTUsImV4cCI6MTY5ODU4NzY1NX0.djx6IjciUyQlNilvGhFuQAKHyyyNIw2RevQLelYmbzI")
        console.log(user.statusCode);
        expect(user.statusCode).to.be.eql(200);
        expect(user.body.login).to.be.eql('yulia');
    })
})