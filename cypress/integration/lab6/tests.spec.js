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

    //Test 1
    it('Check position of search-icon', () => {
        var search_icon = cy.get('.header-middle > form > [type="submit"]');
        search_icon.should('have.css','background-position','center');
    });

    // Test 2
    it('Check Phone Anchor', () => {
        cy.get(':nth-child(5) > .menu__link').click();
        var phone = cy.get(':nth-child(1) > .w3-address-right > :nth-child(2)');
        phone.should('have.attr', 'href');
        phone.invoke("attr", "href")
            .then(href => {
                expect(href).to.contain('tel');
            });
    });

    // Test 3
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

    // Test 4
    it('Check Favicon', () => {
        cy.get('head > link > [href="favicon"]');
    });

    // Test 5
    it('Spacing Between Block Test', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .agile_inner_drop_nav_info > :nth-child(2) > .multi-column-dropdown > li > a').click();
        cy.get('.sorting > .clearfix').should('have.css', 'margin-bottom', '20px');
    });

    //Test 6
    it('Check filter range for cursor', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .agile_inner_drop_nav_info > :nth-child(2) > .multi-column-dropdown > li > a').click();
        cy.get('#slider-range').trigger('mouseover').should('have.css','cursor','pointer')
    });

    // Test 7
    it('Review Form Info Test', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click();
        cy.get('.open > .dropdown-menu > .agile_inner_drop_nav_info > :nth-child(2) > .multi-column-dropdown > li > a').click();
        cy.get(':nth-child(1) > .men-pro-item > .item-info-product > h4 > a').click();
        cy.get('.resp-tabs-list > [aria-controls="tab_item-1"]').click();
        cy.get('.add-review > form > [type="text"]').should('have.a.property', 'placeholder');
        cy.get('form > [type="email"]').should('have.a.property', 'placeholder');
        cy.get('textarea').should('have.a.property', 'placeholder');
    });

    // Test 8
    it('Check when click on the card, user is redirected', () => {
        cy.get('.tab1 > :nth-child(1) > .men-pro-item > .men-thumb-item > .pro-image-front').trigger('mouseover').click();
        cy.url().should('not.eq','https://adoring-pasteur-3ae17d.netlify.app/index.html')
    });
});