/// <reference types="cypress" />

context('Email Input Field Test', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('something about the error');

            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done();

            // return false to prevent the error from
            // failing this test
            return false
        });

        cy.visit('https://adoring-pasteur-3ae17d.netlify.app/index.html');
    });

    it('Check input overlapping', () => {
        cy.get('.container > ul > :nth-child(1)').click();
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-body > .col-md-8 > form > :nth-child(2) > input')
            .click().type('emailExample');
        cy.wait(1000);
        cy.get('#myModal').click();
        cy.wait(1000);
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-body > .col-md-8 > form > :nth-child(2) > label')
            .should('have.css', 'top', '-1.3em');
    });
});