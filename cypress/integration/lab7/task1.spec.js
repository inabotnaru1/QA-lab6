/// <reference types="cypress" />

context('All tests', () => {
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
    });

    //Test 1
    it.skip('Check whether a user can search with different languages', () => {
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').click().type('Hello');
        cy.get('#lga').click();
        cy.get('.FPdoLc > center > .gNO89b').click();
        cy.get('.gLFyf').click().clear().type('Здравствуйте');
        cy.get('.FAuhyb > .z1asCe > svg').click();
        cy.get('.gLFyf').click().clear().type('Hallå');
        cy.get('.FAuhyb > .z1asCe > svg').click();
        cy.get('.gLFyf').click().clear().type('你好');
        cy.get('.FAuhyb > .z1asCe > svg').click();
    });

    //Test 2
    it.skip('Check Google search functionality is case sensitive or not', () => {
        // //----
        // cy.visit('https://www.google.com/');
        // cy.get('.gLFyf').click().type('Hello');
        // cy.get('#lga').click();
        // cy.get('.FPdoLc > center > .gNO89b').click();
        // //----
        cy.get('.gLFyf').click().clear().type('dog');
        cy.get('.FAuhyb > .z1asCe > svg').click();

        cy.get(':nth-child(1) > .rc > .yuRUbf').then(($span) => {
            const text = $span.text();
            console.log(text);
            cy.get('.gLFyf').click().clear().type('DOG');
            cy.get('.FAuhyb > .z1asCe > svg').click();
            cy.get(':nth-child(1) > .rc > .yuRUbf').then(($span) => {
                const text2 = $span.text();
                expect(text).to.equal(text2);
            });
        });
    });

    //Test 3
    it.skip('Check some Google service like calculator service is it displaying when a user search for calculator', () => {
        //----
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').click().type('Hello');
        cy.get('#lga').click();
        cy.get('.FPdoLc > center > .gNO89b').click();
        //----
        cy.get('.gLFyf').click().clear().type('calculator');
        cy.get('.FAuhyb > .z1asCe > svg').click();
        cy.get('[jscontroller="bTaGX"]');
    });


    //Test 4
    it('Check when a user search for Google converter services then the converter service should be displayed in the top of the search result', () => {
        //----
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').click().type('Hello');
        cy.get('#lga').click();
        cy.get('.FPdoLc > center > .gNO89b').click();
        //----
        cy.get('.gLFyf').click().clear().type('1$ in euro');
        cy.get('.FAuhyb > .z1asCe > svg').click();

        cy.get('.mod').then(($el1)=>{
            const result1 = $el1.text();
            console.log(result1);
            cy.get('#rso > :nth-child(1)').then(($el2) => {
                const result2 = $el2.text();
                expect(result1).to.equal(result2);
            });
        })
    });
});