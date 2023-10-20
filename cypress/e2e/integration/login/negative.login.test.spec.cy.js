describe("Login with invalid credentials", () => {
    beforeEach(() => {
        cy.visit('http://stage3.switschooltest.com' + '/login');
    });

    it("should be displayed Невірний логін або пароль after entering invalid credentials", () => {
        cy.get("[placeholder='Логін']").type("12345");
        cy.get("[type='password']").type("uhdp0");
        cy.get("[type='submit']").click();
        cy.get(".text-danger").contains("Невірний логін або пароль");
    });
});