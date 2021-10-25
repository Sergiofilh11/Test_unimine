describe('Equipe de Quality Assurance UNIDEV (Home)', () => {
    const baseUrl = 'http://localhost:8080';

    it('Deve exibir mensagem de erro ao submeter o formulário em branco', () => {
        cy.visit(baseUrl),
        cy.get('#shortner').click()
        cy.get('#sadFace').should('be.visible')
    });

    it('Deve exibir mensagem de erro ao submeter o formulário com dados inválidos', () => {
        cy.visit(baseUrl),
        cy.get('#convertLink').type('abc123')
        cy.get('#shortner').click()
        cy.get('#sadFace').should('be.visible')
    });

    it('Deve exibir mensagem de erro ao submeter o formulário com dados inválidos', () => {
        cy.visit(baseUrl),
        cy.get('#convertLink').type('www.abc123.com')
        cy.get('#shortner').click()
        cy.get('.socials-network').should('be.visible')
    });

})