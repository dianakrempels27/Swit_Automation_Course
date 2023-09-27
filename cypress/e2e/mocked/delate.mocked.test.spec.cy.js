describe("Create Post Test", () => {
    beforeEach(() => {
        cy.login({
            login:"diana.krempels1",
            password:"09Tirogo&"
        })
        cy.wait("@newPost");
    });

    it("should be delated post after clicking on the Видалити допис button", () => {
        cy.get("h4").contains("Top 10 books of the year").click()
        cy.get(".btn.btn-danger").contains("Видалити допис").click()
    });
});