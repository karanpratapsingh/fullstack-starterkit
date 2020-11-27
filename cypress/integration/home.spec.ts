/// <reference types="cypress" />

import { withID } from '../utils';
import Selectors from '../../web/src/config/test.selectors';

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should load the Home page', () => {
    cy.get(withID(Selectors.title)).should('be.visible').should(element => {
      expect(element).to.have.length(1);
      expect(element.first().text()).to.be.eq('Full Stack Starterkit');
    });
  });
});
