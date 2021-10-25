describe('Equipe de Quality Assurance UNIDEV (Home)', () => {

    it('Deve exibir mensagem de erro ao submeter o formulário em branco', () => {
        cy.visit("http://localhost:8080"),
        cy.get('#shortner').click()
        cy.contains('.box').should('be.visible')
    })
    
})