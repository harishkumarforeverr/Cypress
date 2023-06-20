1. checking length
   .should ('have.length',4)

2. .should('equal', 'some value')

3. cy.get('.list-item').should ('have.length',4)

4. should('exist')

5. should('not.exist')

6. should('be.visible')

7. should('not.be.visible');

8. should('have.class', 'list-item-selected')

9. should('have.css','background-color','blue')

10. checking text content
    .invoke('text')
    .should('contain')
    .should('not.contain')

11. click()

12. type()

13. use debugger(NOTE : open dev tool of chrom to work)

    example
    cy.get('[data-cy=box-4-items-list] > :nth-child(2)').trigger('mouseover').then(()=>{
    debugger
    });

    or

    cy.get('[data-cy=box-4-items-list] > :nth-child(2)').trigger('mouseover').debug()
