/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('customLogin', (username: string, password: string) => {
    cy.visit('http://localhost:4200/')
    cy.get('[id^=username]').type(username)
    cy.get('[id^=password]').type(password)
    cy.get('button').click() //click on button
    cy.url().should('include',"/home")
})

declare namespace Cypress {
  interface Chainable {
    customLogin(username: string, password: string): Chainable<void>;
  }
}
