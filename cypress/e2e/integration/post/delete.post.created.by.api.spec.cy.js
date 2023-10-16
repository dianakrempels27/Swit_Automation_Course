describe("delete post created by API", () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.createPostViaApi("Test post via API");
        cy.visit("http://stage3.switschooltest.com");
    });

    it("should be deleted post after clicking on the Видалити допис button", () => {
        cy.get("h4").contains("Test post via API").click()
        cy.get(".btn.btn-danger").contains("Видалити допис").click()
        cy.get("h4").contains("Test post via API").should("not.exist");
    });
})