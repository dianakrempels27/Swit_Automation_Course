describe("Registration Page Test", () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
    })

    it("should be displayed registration form after clicking on Реєстрація button", () => {
        cy.get("[href='/register']").click();
        cy.get("h1");
        cy.get("[type='email']").type(email);
        cy.get("[placeholder='Логін']").type(login);
        cy.get("[type='password']").type(password);
        cy.get("[type='submit']").click();
        cy.get("//h2[contains(text(),'Найкращі подорожі по Ісландії')]")
    })
})