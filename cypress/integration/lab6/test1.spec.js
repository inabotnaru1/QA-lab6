/// <reference types="cypress" />

context('Search Icon Positioning Test', () => {
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

    it('Check position of search-icon', () => {
        var search_icon = cy.get('.header-middle > form > [type="submit"]');
        search_icon.should('have.css','background-position','center');
    });
});