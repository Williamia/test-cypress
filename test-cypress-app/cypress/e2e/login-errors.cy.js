
describe('Login Functionality - Error Cases', () => {
    const url = 'http://localhost:5173'; 
  
    beforeEach(() => {
      cy.visit(url);
    });
  
    it('Invalid email format', () => {
      cy.get('input[type="email"]').type('invalid-email');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click(); 
    });
  
    it('Empty fields', () => {
      cy.get('button[type="submit"]').click(); 
    });
  

    it('Password is too short', () => {
      cy.get('input[type="email"]').type('user@example.com');
      cy.get('input[type="password"]').type('123'); 
      cy.get('button[type="submit"]').click();
    });
  
    it('Unregistered email', () => {
      cy.get('input[type="email"]').type('unregistered@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click(); 
    });
  });
  