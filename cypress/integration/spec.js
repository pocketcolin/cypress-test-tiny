describe('page', () => {
  it('editing number input field', () => {
    cy.visit('/test.html')
    cy.get('input').clear().type(5)
  })
})
