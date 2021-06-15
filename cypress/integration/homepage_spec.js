describe("Home Page", () => {
  beforeEach(() => {
    cy.interceptUrls()
    cy.visit('/')
  })

  it('Should see title and shortened urls', () => {
    cy.get('section')
      .get('.url')
      .contains("Awesome photo")
      .find('.url > a').should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
  })
})