describe("Create User Profile Test",  {testIsolation: false }, () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
        cy.login({
            login:"diana.krempels1",
            password:"09Tirogo&"
        });
    });

    it("should be displayed profile registration form after clicking on Профіль button", () => {
        cy.get("[href='/profile']").click();
        cy.get("h1").contains("Профіль");
        cy.get("[name='name']").clear().type("Diana");
        cy.get("[placeholder='Прізвище']").clear().type("Krempels");
        cy.get("[placeholder='Дата народження']").clear().type("27.04.2000");
        cy.get("[placeholder='Країна']").clear().type("Ukraine");
        cy.get("[placeholder='Нікнейм']").clear().type("Bulka");
        cy.get("[name='about']").clear().type("Trying to become Automation QA!");
        cy.get("[type='submit']").click();
        cy.get("[name='name']").should("have.value", "Diana");
        cy.get("[placeholder='Прізвище']").should("have.value", "Krempels");
        cy.get("[placeholder='Дата народження']").should("have.value", "27.04.2000");
        cy.get("[placeholder='Країна']").should("have.value", "Ukraine");
        cy.get("[placeholder='Нікнейм']").should("have.value", "Bulka");
        cy.get("[name='about']").should("have.value", "Trying to become Automation QA!");
    });
});