Cypress.Commands.add("login", (user) => {
    cy.session(
        user, 
        () => {
        cy.visit(Cypress.config('baseUrl') + '/login')
        cy.get('input[name=login]').type(user.login)
        cy.get('input[name=password').type(user.password)
        cy.get('button[type="submit"]').click();
    })
})