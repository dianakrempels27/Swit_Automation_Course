describe("Create Post Test", () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
    })

    it("should be delated post after clicking on the Видалити допис button", () => {
        cy.visit(Cypress.config('baseUrl') + '/login')
        cy.get('input[name=login]').type("diana.krempels1")
        cy.get('input[name=password').type("09Tirogo&")
        cy.get('button[type="submit"]').click()
        cy.get("h4").contains("My trip to London").click()
        cy.get(".btn.btn-danger").contains("Видалити допис").click()
    })
})