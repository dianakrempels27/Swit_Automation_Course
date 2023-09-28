describe("Create Post Test", () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
        cy.login({
            login:"diana.krempels1",
            password:"09Tirogo&"
        })
    })

    it("should be deleted post after clicking on the Видалити допис button", () => {
        cy.get("h4").contains("My trip to London").click()
        cy.get(".btn.btn-danger").contains("Видалити допис").click()
        cy.get("h4").contains("My trip to London").should("not.exist");
    })
})