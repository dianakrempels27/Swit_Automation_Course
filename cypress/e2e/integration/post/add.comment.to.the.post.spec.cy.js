describe("Update post created by API", () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.createPostViaApi("Test post via API");
        cy.visit("http://stage3.switschooltest.com");
    });

    it("should be added the comment to the post after clicking on the Відправити button", () => {
        cy.get("h4").contains("Test post via API").click();
        cy.get("[placeholder='Повідомлення']").type("Great post!");
        cy.get("[type='submit']").contains("Відправити").click();
        cy.get(".comment-classic-text").contains("Great post!");
        })
    });