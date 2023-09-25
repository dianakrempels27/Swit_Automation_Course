describe("Create User Profile Test", () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
        cy.login({
            login:"diana.krempels1",
            password:"09Tirogo&"
        })
    })

    it("should be displayed profile registration form after clicking on Профіль button", () => {
        cy.visit('.rd-nav-link[href="/profile"]').click();
        cy.get("h1").contains("Профіль");
        cy.get("[placeholder='Ім'я']").type("Diana");
        cy.get("[placeholder='Прізвище']").type("Krempels");
        cy.get("[placeholder='Країна']").type("Ukraine");
        cy.get("[placeholder='Нікнейм']").type("Bulka");
        cy.get("[type='file']").click();
        cy.get("[type='file']").type("126559-muzyka-biom-svet-nebo-atmosfera-1280x720.jpg");
        cy.get("[type='submit']").click();
        cy.get('input').each(($input) => {
            cy.wrap($input).should('have.value');
          });
    })
})