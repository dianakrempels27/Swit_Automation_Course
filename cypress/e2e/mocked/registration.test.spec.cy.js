describe("Registration Page Test", () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
    })

    it("should be displayed registration form after clicking on Реєстрація button", () => {
        cy.get("[href='/register']").click();
        cy.get("h1");
        cy.get("[type='email']").type("volodina@gamil.com");
        cy.get("[placeholder='Логін']").type("volodina.krempels90");
        cy.get("[type='password']").type("Krempels&0000");
        cy.get("[type='submit']").click();
        cy.get("h2")
    })
})