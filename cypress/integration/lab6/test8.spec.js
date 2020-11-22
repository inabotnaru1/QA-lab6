/// <reference types="cypress" />

context('Cards Functioning Test', () => {
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

    it('Check when click on the card, user is redirected', () => {
        cy.get('.tab1 > :nth-child(1) > .men-pro-item > .men-thumb-item > .pro-image-front').trigger('mouseover').click();
        cy.url().should('not.eq','https://adoring-pasteur-3ae17d.netlify.app/index.html')
    });
});