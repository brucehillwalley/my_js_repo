describe("login", () => {

beforeEach(() => {
  cy.visit("http://localhost:3000/");
  cy.viewport(1200, 1200)
  //! viewport ile ekranı ayarlıyoruz
})

  it("login test", () => {
  

    cy.get('[data-test="loginHeader"]').contains("Recipe");
    cy.get('[data-test="loginName"]').should("be.visible").type("asp");
    //! should ile bir iddaada bulunuyoruz örn. görünüyor mu? type ile içine yazıyoruz
    cy.get('[data-test="loginPassword"]')
      .should("be.visible")
      .type("Clarusway7");
    //! type ile inputa yazıyoruz
    //? cy.wait(20000)
    //! 20 saniye bekletioruz istersek
    cy.get('[data-test="loginSbmt"]')
      .should("be.visible")
      .click({ force: true });
    //! click ile butona tıklatıyoruz.  force true ile her türlü çalıştırıyoruz.
    cy.url().should("include", "/home");
    //! urlde home sayfasına gitti mi kontrol ediyoruz
  });
});


