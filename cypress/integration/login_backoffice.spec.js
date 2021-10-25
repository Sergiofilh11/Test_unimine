describe('Equipe de Quality Assurance UNIDEV (Login)', () => {

    it('Deve fazer login apos colocar os dados correto', () => {
        cy.visit("http://localhost:8081/login")
        cy.get('.white--text').click()
    })
})