import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../../src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the Quiz component', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('exist');
  });

  it('displays questions and options', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.question').should('exist');
    cy.get('.option').should('have.length.greaterThan', 0);
  });

  it('calculates score correctly', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.option').first().click();
    cy.get('button').contains('Submit Answer').click();
    cy.get('.score').should('exist');
  });
});