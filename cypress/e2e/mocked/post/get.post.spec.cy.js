const itif = (condition) => (condition ? it : it.skip);
describe("Get Post Details", { testIsolation: false }, () => {
  beforeEach(() => {
    cy.intercept("https://unit1105.p-host.kiev.ua/post", {
      fixture: "get.post",
    }).as("posts");
    cy.login({
      login:"diana.krempels1",
      password:"09Tirogo&"
    });
    cy.wait("@posts");
    cy.intercept('https://unit1105.p-host.kiev.ua/post/65395a64fd56a263d8f13918', {fixture:'findPost'}).as('post');
    cy.intercept('https://unit1105.p-host.kiev.ua/comment/65395a64fd56a263d8f13918', {fixture:'comments'}).as('comments');
    cy.get("h4").contains("Test post via API").click();
    cy.wait('@post');
    cy.wait('@comments');
  });

  it("should be opened posts after signed in", () => {
    cy.get("h2").contains("Test post via API");
    cy.get(".comment-classic").should('have.length', 2);
  });
});