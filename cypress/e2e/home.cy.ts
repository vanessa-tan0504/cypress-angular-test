describe('Test if there are 20 names', () => {
  it('should return true if there are 20 names', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('[ data-testid="pokemon-list"]').get('[data-testid="list-pokemon-name"]').should('have.length', 20);
  });
});


// describe('Test if 1st pokemon is bulbasur', () => {
//     it('should return true if pokemon is bulbasur', () => {
//       cy.visit('http://localhost:4200/home');
//       cy.get('[ data-testid="pokemon-list"]').get('[data-testid="list-pokemon-name"]').first().should('have.text', ' bulbasaur ');
//     });
//   });


  // describe('Test on intercepting api request ', () => {
  //   it('should return status code 200 if api call is success', () => {
  //     cy.intercept('GET','https://pokeapi.co/api/v2/pokemon').as('getPokemon')   //Interceprting api request
  //     cy.visit('http://localhost:4200/home')  //visit the page where api request is expected to be called
  //     cy.wait('@getPokemon').its('response.statusCode').should('equal',200)
  //   })
  // })


  // describe('Test on intercepting api request ', () => {
  //   it('should return status code 200 if api call is success', () => {
  //     cy.intercept('GET','https://pokeapi.co/api/v2/pokemon').as('getPokemon') //Interceprting api request    
  //     cy.visit('http://localhost:4200/home')   //visit the page where api request is expected to be called
  //     cy.wait('@getPokemon')
  //     .then(({response})=>{
  //       expect(response?.statusCode).to.equal(200);
  //       expect(response?.body.count).to.equal(1302);
  //     })
  //   })
  // })
