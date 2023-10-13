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

Cypress.Commands.add("editProfile", (user) => {
    cy.get("[href='/profile']").click();
    cy.get("h1").contains("Профіль");
    cy.get("[name='name']").clear().type(user.name);
    cy.get("[placeholder='Прізвище']").clear().type(user.surname);
    cy.get("[placeholder='Дата народження']").clear().type(user.birthday);
    cy.get("[placeholder='Країна']").clear().type(user.country);
    cy.get("[placeholder='Нікнейм']").clear().type(user.nickname);
    cy.get("[name='about']").clear().type(user.about);
    cy.get("[type='submit']").click();
})

Cypress.Commands.add("loginViaApi", (login = "diana.krempels1", password = "09Tirogo&") => {
    cy.request({
        method: "POST",
        url: "https://unit1105.p-host.kiev.ua/login",
        body: {
            "login":login,
            "password":password
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        const token = response.body.token;
        cy.setCookie("token", token);
        Cypress.env("token", token);
        cy.window().then((win) => {
            win.localStorage.setItem("userData", JSON.stringify(response.body));
            win.localStorage.setItem("isShowed", true);
         });
    });
});

Cypress.Commands.add("createPostViaApi", (title) => {
    cy.request({
        method: "POST",
        url: "https://unit1105.p-host.kiev.ua/post",
        body: {
            "image": {
                "0": {}
            },
            title,
            "description": "hello everyone!",
            "content": "fwjfowfjkwl",
            "imageUrl": "/uploads/image-1696498724103-896383774.jpg"
        },
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${Cypress.env("token")}`
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});