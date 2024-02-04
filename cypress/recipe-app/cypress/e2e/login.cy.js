describe("login", () => {
  it("login test", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-test="loginHeader"]').contains("Recipe")
    cy.get('[data-test="loginName"]').should('be.visible').type("asp")
    //! should ile bir iddaa dabulunuuyoruz örn. görünüyor mu? type ile içine yazıyoruz
    cy.get('[data-test="loginPassword"]').should('be.visible').type("Clarusway7")
    cy.get('[data-test="loginSbmt"]').should("be.visible").click({force:true})
    //! click ile butona tıklatıyoruz.  force true ile her türlü çalıştırıyoruz.
    cy.url().should('include', '/home')
    //! urlde home sayfasına gitti mi kontrol ediyoruz



  });
});
