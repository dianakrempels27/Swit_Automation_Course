describe("Logout", () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.visit("http://stage3.switschooltest.com");
    })

    it("should be logout after clicking on Вийти button", () => {
        cy.get(".rd-nav-link").contains("Вийти").click();
        cy.get(".rd-nav-link").contains("Увійти");
    })
})