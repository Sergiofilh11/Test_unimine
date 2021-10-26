describe('Equipe de Quality Assurance UNIDEV (Home)', () => {
    const baseUrl = 'http://localhost:8080';

    it('Deve exibir mensagem de erro ao submeter o formulário em branco', () => {
        cy.visit(baseUrl),
        cy.get('#shortner').click()
        cy.get('#sadFace', {timeout: 100000}).should('be.visible')
    });

    it('Deve exibir mensagem de erro ao submeter o formulário com dados inválidos', () => {
        cy.visit(baseUrl),
        cy.get('#convertLink').type('abc123')
        cy.get('#shortner').click()
        cy.get('#sadFace', {timeout: 100000}).should('be.visible')
    });

    it('Deve exibir o card de compartilhamento quando dados válidos forem enviados pelo formulário', () => {
        cy.visit(baseUrl),
        cy.get('#convertLink').type('www.abc123.com')
        cy.get('#shortner').click()
        cy.get('.socials-network', {timeout: 100000}).should('be.visible')
    });
  
    it('Deve existir url curta no card de compartilhamento', () => {
        cy.visit(baseUrl),
        cy.get('#convertLink').type('www.123abc.com')
        cy.get('#shortner').click()
        cy.get('.link-shortned', {timeout: 100000}).invoke('text').should('have.length', 29)
    });
})