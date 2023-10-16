describe("Create Post Test", () => {
    beforeEach(() => {
        cy.loginMocked({
            login:"diana.krempels1",
            password:"09Tirogo&"
        })
    });

    it("should be deleted post after clicking on the Видалити допис button", () => {
        cy.get("h4").contains("Top 10 books of the year").click()
        cy.get(".btn.btn-danger").contains("Видалити допис").click()
        cy.get("h4").contains("Top 10 books of the year").should("not.exist");
    });
});