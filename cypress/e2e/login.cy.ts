// describe('Test login page load successfully', () => {
//     it('should display title, forms fields and login button', () => {
//       cy.visit('http://localhost:4200/')
//       cy.contains('Login to your account')
//       cy.get('label').contains('Username')
//       cy.get('label').contains('Password')
//       cy.get('button').contains('Login')
//     })
//   })

  
  // describe('Test validation with empty input', () => {
  //   it('should display error with empty message', () => {
  //       cy.visit('http://localhost:4200/')
  //       cy.get('button').click() //click on button
  //       cy.get('[data-testid="action-error-alert-message"]').contains('All field must be filled in.')
  //       cy.url().should('not.include',"/home")
  //     })
  // })


  // describe('Test validation with invalid input', () => {
  //   it('should display error with invalid message & not log to homepage', () => {
  //       cy.visit('http://localhost:4200/')
  //       cy.get('[id^=username]').type("dummyUser")
  //       cy.get('[id^=password]').type("dummyPass")
  //       cy.get('button').click() //click on button
  //       cy.get('[data-testid="action-error-alert-message"]').contains('Login failed. Please check your username and password.')
  //       cy.url().should('not.include',"/home")
  //     })
  // })


  // describe('Test validation with valid input', () => {
  //   it('should route to home page', () => {
  //       cy.visit('http://localhost:4200/')
  //       cy.get('[id^=username]').type("admin")
  //       cy.get('[id^=password]').type("123123")
  //       cy.get('button').click() //click on button
  //       cy.url().should('include',"/home")
  //     })
  // })

  
  describe('Test validation with custom command', () => {
    it('should route to home page if validation pass, else fail', () => {
        cy.customLogin("admin","123123");
      })
  })
