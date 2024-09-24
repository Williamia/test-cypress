

describe('Login Functionality - Success Cases', () => {
    it('Login with valid credentials', () => {
      cy.visit('http://localhost:5173'); 
  
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password123');
      
      cy.get('button[type="submit"]').click();
      
    });
  });
  