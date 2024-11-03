describe('E2E Testing with Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the website and navigate to forms layout', () => {
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
  });

  it('should test the Sign In button', () => {
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    cy.get('[data-name="menu-2"]').click();
    cy.wait(1000);
    
    cy.get('[id="inputEmail3"]').type('test@example.com');
    cy.get('[id="inputPassword3"]').type('password');
    // cy.get('[class="native-input visually-hidden"]').check();
    cy.wait(1000);
    cy.get('nb-checkbox').contains('Remember me').click();
    cy.contains('Sign in').click();
  });


  it('should test radio buttons', () => {
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    cy.get('[data-name="menu-2"]').click();
    cy.get('nb-radio').should('be.visible');
    cy.get('nb-radio').should('have.length', 3);
    cy.get('nb-radio').eq(0).find('input').should('be.visible').and('not.be.disabled').click({ force: true });
    cy.get('nb-radio').eq(1).find('input').should('be.visible').and('not.be.disabled').click({ force: true });
    cy.get('nb-radio').eq(0).find('input').should('not.be.checked');
    cy.get('nb-radio').eq(2).find('input').should('be.disabled');
  });

  it('should test modals and overlays', () => {
    cy.get('[data-name="menu-2"]').click();
    cy.contains('Modal & Overlays').click();
    cy.contains('Toastr').click();
    cy.get('[data-name="menu-2"]').click();

    // Check all three checkboxes
    cy.get('nb-checkbox').each(($checkbox) => {
      cy.wrap($checkbox).find('input[type="checkbox"]').check({ force: true });
    });

    // Click only the second checkbox
    cy.get('nb-checkbox').eq(1).find('input[type="checkbox"]').click({force: true });
  });
});