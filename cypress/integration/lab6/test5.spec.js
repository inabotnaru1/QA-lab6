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

    // Test 5
    it('Spacing Between Block Test', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .agile_inner_drop_nav_info > :nth-child(2) > .multi-column-dropdown > li > a').click();
        cy.get('.sorting > .clearfix').should('have.css', 'margin-bottom', '20px');
    });
});