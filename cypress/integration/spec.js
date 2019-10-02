const nonExistentSelector = '.foo'
describe('without stripe', () => {
  beforeEach(() => {
    cy.visit('without_stripe.html')
  })

  it('asserting "not visible" when element does not exist works ok', () => {
    cy.get(nonExistentSelector).should('not.be.visible')
  })
})

describe('with stripe', () => {
  beforeEach(() => {
    cy.visit('with_stripe.html')
  })

  it('asserting "not visible" when element does not exist fails', () => {
    cy.get(nonExistentSelector).should('not.be.visible')
  })

  it('asserting "not exists" then "not visible" works ok', () => {
    cy.get(nonExistentSelector)
      .should('not.exist')
      .and('not.be.visible')
  })
})