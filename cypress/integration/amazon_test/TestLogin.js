describe("Testing_amazon_Logging", () => {
  it("valid user and password", () => {
    cy.visit("www.amazon.co.uk");
    cy.get("#nav-link-accountList").click();
    cy.get("#ap_email").type("siridun07@gmail.com");
    cy.get("#continue").click();
    cy.get("#ap_password").type("Amazontest");
    cy.get("#signInSubmit").click();
    cy.get("#nav-link-accountList-nav-line-1").should(
      "have.text",
      "Hello, munni"
    );
  });
});
