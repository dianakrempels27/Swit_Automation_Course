describe("Update post created by API", () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.visit("http://stage3.switschooltest.com");
    });

    it("should be deleted post", () => {
        cy.request({
            method: "DELETE",
            url: "https://unit1105.p-host.kiev.ua/post/6526b0cdfd56a263d8f13687",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${Cypress.env("token")}`
            }
            }).then((response) => {
                expect(response.status).to.eq(200);
            })
            cy.get("h4").contains("Test post via API").should("not.exist");
        })
    });