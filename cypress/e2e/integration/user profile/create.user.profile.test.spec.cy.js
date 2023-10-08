describe("Create User Profile Test",  {testIsolation: false }, () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
        cy.loginViaApi({
            login:"diana.krempels1",
            password:"09Tirogo&"
        });
        cy.editProfile({
            name:"Diana",
            surname: "Krempels",
            birthday: "27.04.2000",
            country: "Ukraine",
            nickname: "Bulka",
            about: "Trying to become Automation QA!"
        });
    });

    it("should be displayed profile registration form after clicking on Профіль button", () => {
        cy.get("[name='name']").should("have.value", "Diana");
        cy.get("[placeholder='Прізвище']").should("have.value", "Krempels");
        cy.get("[placeholder='Дата народження']").should("have.value", "27.04.2000");
        cy.get("[placeholder='Країна']").should("have.value", "Ukraine");
        cy.get("[placeholder='Нікнейм']").should("have.value", "Bulka");
        cy.get("[name='about']").should("have.value", "Trying to become Automation QA!");
    });
});