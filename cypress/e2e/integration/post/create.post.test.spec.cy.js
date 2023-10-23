describe("Create Post Test", () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.visit("http://stage3.switschooltest.com");
    })

    it("should be displayed post after creating it", () => {
        cy.get('[href="/add-post"]').click();
        cy.get("h1").contains("Створити допис");
        cy.get("[type='file']").selectFile('London post.jpg')
        cy.get("[name='title']").type("My trip to London");
        cy.get("[placeholder='Поле для опису']").type("London is considered a forest.");
        cy.get("[placeholder='Текст допису']").type("There are almost as many trees in London as there are people. According to a UN definition, any area that has at least 20% trees is considered a forest. And trees cover around 21% of the land in London, making the city an urban forest. In fact, 8.6 million people are known to live alongside 8.3 million trees.");
        cy.get("[type='submit']").click();
        cy.get("h1").contains("My trip to London");
    })
})