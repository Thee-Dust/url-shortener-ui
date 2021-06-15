describe("Home Page", () => {
  beforeEach(() => {
    cy.interceptUrls()
    cy.visit('/')
  })

  it('Should see title and shortened urls', () => {
    cy.get('section')
      .get('.url')
      .contains("Awesome photo")
      .get('a').should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
  })

  it('Should see a form to input data', () => {
    cy.get('form')
      .get('[placeholder="Title..."]')
      .get('[placeholder="URL to Shorten..."]')
  })
  
  it('Should input data to form', () => {
    cy.get('form')
      .get('[placeholder="Title..."]').type('cool url')
      .get('[placeholder="URL to Shorten..."]').type('https://timesofindia.indiatimes.com/photo/67586673.cms')
  })
  
  // it('Should input data to form', () => {
  //   cy.get('form')
  //     .get('[placeholder="Title..."]').type('cool url')
  //     .get('[placeholder="URL to Shorten..."]').type('https://timesofindia.indiatimes.com/photo/67586673.cms')
  //     .get('button').click()
  //     .get('section > :nth-child(2)')
  //     .contains('https://timesofindia.indiatimes.com/photo/67586673.cms')
  //     .get('section > :nth-child(2)')
  //     .contains('cool url')
  //     .get('section > :nth-child(2)')
  //     .contains('http://localhost:3001/useshorturl/1623775201831')
  //   })
})