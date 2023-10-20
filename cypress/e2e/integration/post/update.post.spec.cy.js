describe("Update post created by API", () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.createPostViaApi("Test post via API");
        cy.visit("http://stage3.switschooltest.com");
    });

    it("should be updated post after clicking on the Редагувати допис button", () => {
        cy.get("h4").contains("Test post via API").click();
        cy.get(".btn.btn-primary").contains("Редагувати допис").click();
        cy.get("[placeholder='Текст допису']").clear().type("Have a good day :)")
        cy.get("[type='submit']").contains("Редагувати допис").click();
        cy.get("[placeholder='Текст допису']").should("have.value", "Have a good day :)");
    });
});