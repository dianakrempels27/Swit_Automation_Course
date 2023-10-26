const itif = (condition) => (condition ? it : it.skip);
describe("Get Post Details", { testIsolation: false }, () => {
  beforeEach(() => {
    cy.intercept("https://unit1105.p-host.kiev.ua/post", {
      fixture: "post",
    }).as("allPosts");
    cy.loginViaUi();
    cy.wait("@allPosts");
    cy.intercept('https://unit1105.p-host.kiev.ua/post/64652030c68905060539f7ab', {fixture:'getPost'}).as('getPost');
    //cy.intercept('https://unit1105.p-host.kiev.ua/comment/64652030c68905060539f7ab', {fixture:'comments'}).as('comments');
    cy.get("h4").contains("Do you like Italy").click();
    cy.wait('@getPost');
    //cy.wait('@comments');
  });

  it("should be opened posts after signed in", () => {
    cy.get("h2").contains("Do you like Italy");
    cy.get(".comment-classic").should('have.length', 2);
  });

  // afterEach(() => {
  //   cy.logout();
  // })
});