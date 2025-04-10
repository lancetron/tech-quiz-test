describe('Quiz End-to-End Test', () => {
  it('allows the user to complete the quiz', () => {
    cy.visit('/');
    cy.contains('Start Quiz').click();
    cy.get('[data-testid="question"]').should('exist');
    cy.get('[data-testid="answer"]').first().click();
    cy.contains('Submit').click();
    cy.contains('Your Score').should('exist');
  });
});