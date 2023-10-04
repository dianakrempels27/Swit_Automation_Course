describe("Create User Profile Test", () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
    });

    it("should be displayed profile registration form after clicking on Профіль button", () => {
        cy.visit(Cypress.config('baseUrl') + '/login')
        cy.get('input[name=login]').type("diana.krempels1")
        cy.get('input[name=password').type("09Tirogo&")
        cy.get('button[type="submit"]').click();
        cy.get("[href='/profile']").click();
        cy.get("h1").contains("Профіль");
        cy.get("[name='name']").type("Diana");
        cy.get("[placeholder='Прізвище']").type("Krempels");
        cy.get("[placeholder='Дата народження']").type("27.04.2000");
        cy.get("[placeholder='Країна']").type("Ukraine");
        cy.get("[placeholder='Нікнейм']").type("Bulka");
        cy.get("[name='about']").type("Trying to become Automation QA!");
        cy.get("[type='submit']").click();
    });
});