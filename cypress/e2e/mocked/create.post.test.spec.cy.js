describe("Create Post Test", () => {
    beforeEach(() => {
        cy.visit("http://stage3.switschooltest.com");
        cy.login({
            login:"diana.krempels1",
            password:"09Tirogo&"
        })
    })

    it("should be displayed post after creating it", () => {
        cy.get('[href="/add-post"]').click();
        cy.get("h1").contains("Створити допис");
    })
})