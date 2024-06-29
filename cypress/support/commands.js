// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import ticktesPage from "../pages/tickets/ticketsPage";

Cypress.Commands.add("preencherCamposObrigatorios", data =>{
    cy.fixture("user.json").then((user) => {
        ticktesPage.FirstName.type(user.firstName);
        ticktesPage.LastName.type(user.lastName);
        ticktesPage.Email.type(user.email);
    });

    ticktesPage.Agree.check();
    ticktesPage.SubmitButton.click();
});