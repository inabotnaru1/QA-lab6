/// <reference types="cypress" />

context('Telephone Link Test', () => {
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

    it('Check Phone Anchor', () => {
        cy.get(':nth-child(5) > .menu__link').click();
        var phone = cy.get(':nth-child(1) > .w3-address-right > :nth-child(2)');
        phone.should('have.attr', 'href');
        phone.invoke("attr", "href")
            .then(href => {
                expect(href).to.contain('tel');
            });
    });
});