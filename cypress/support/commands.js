Cypress.Commands.add("login", (user) => {
    cy.session(user, () => {
        cy.visit(Cypress.config('baseUrl') + '/login');
        cy.intercept('http://stage3.switschooltest.com/add-post', {fixtures:'post'}).as('newPost');
        cy.get('input[name=login]').type(user.login);
        cy.get('input[name=password').type(user.password);
        cy.get('button[type="submit"]').click();
    });
});

Cypress.Commands.add("loginMocked", (user) => {
    cy.visit(Cypress.config('baseUrl') + '/login');
    cy.intercept('https://unit1105.p-host.kiev.ua/login', {statusCode:200}).as('login');
    cy.intercept('https://unit1105.p-host.kiev.ua/post', {fixtures: 'get.post'}).as('posts');
    cy.get('input[name=login]').type(user.login);
    cy.get('input[name=password').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.wait('@login');
})