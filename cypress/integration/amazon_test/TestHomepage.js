describe("Homepage testing", () => {
  it("test textbox is present", () => {
    cy.visit("https://www.amazon.co.uk");
    cy.get("#twotabsearchtextbox").should("exist");
  });
});
