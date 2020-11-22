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

    it('Review Form Info Test', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .agile_inner_drop_nav_info > :nth-child(2) > .multi-column-dropdown > li > a').click();
        cy.get(':nth-child(1) > .men-pro-item > .item-info-product > h4 > a').click();
        cy.get('.resp-tabs-list > [aria-controls="tab_item-1"]').click();
        cy.get('.add-review > form > [type="text"]').should('have.a.property', 'placeholder');
        cy.get('form > [type="email"]').should('have.a.property', 'placeholder');
        cy.get('textarea').should('have.a.property', 'placeholder');
    });
});