describe("Create Post Test", () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.visit("http://stage3.switschooltest.com");
    })

    it("should be deleted post after clicking on the Видалити допис button", () => {
        cy.get("h4").contains("1700047388").click()
        cy.get(".btn.btn-danger").contains("Видалити допис").click()
        cy.get("h4").contains("My trip to London").should("not.exist");
    })
})