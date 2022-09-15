describe("next.js app test", () => {
  const urls = ["http://localhost:3000", "http://localhost:3000/other-page"];
  urls.forEach((url) => {
    it(`should have no error on ${url}`, () => {
      cy.visit(url);
      cy.wait(1000);
    });
  });
});
