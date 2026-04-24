import { BasePage } from '../pageObjects/basePage.js';
import { SelectablePage } from '../pageObjects/selectablePage.js';

describe('Selectable Practise Grid - 1MD', () => {
  //===========================================================================
  context('Selectable grid', () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    //--------------------------------------------------------------------------------------------------------------------------------------
    it('Click elements and validate', () => {
      SelectablePage.gridButton.click();         //Click Grid

      SelectablePage.groupItem('Two').click();   //Click Two
      SelectablePage.groupItem('Four').click();  //Click Four
      SelectablePage.groupItem('Six').click();   //Click Six
      SelectablePage.groupItem('Eight').click(); //Click Eight

      //Validate selected
      SelectablePage.groupItem('Two').should('have.class', 'active');
      SelectablePage.groupItem('Four').should('have.class', 'active');
      SelectablePage.groupItem('Six').should('have.class', 'active');
      SelectablePage.groupItem('Eight').should('have.class', 'active');

      //Validate non-selected
      SelectablePage.groupItem('One').should('not.have.class', 'active');
      SelectablePage.groupItem('Three').should('not.have.class', 'active');
      SelectablePage.groupItem('Five').should('not.have.class', 'active');
      SelectablePage.groupItem('Seven').should('not.have.class', 'active');
      SelectablePage.groupItem('Nine').should('not.have.class', 'active');
    });
    //--------------------------------------------------------------------------------------------------------------------------------------
  });
  //===========================================================================
});