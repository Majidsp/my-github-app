describe("User search functionality", () => {
    it("Main page links render currectly", () => {
        cy.visit("http://localhost:3000");
        cy.get("[data-cy=nav-link]")
            .contains("Search User")
            .should("be.visible");
        cy.get("[data-cy=nav-link]")
            .contains("3 Developer Team Builder")
            .should("be.visible");
        cy.get("[data-cy=nav-link]").contains("Favorites").should("be.visible");
        cy.get("[data-cy=nav-link]").contains("Favorites").click();
    });
    it("User search for users with a specific query", () => {
        cy.visit("http://localhost:3000");
        cy.intercept("GET", "https://api.github.com/search/*", {
            statusCode: 200,
            fixture: "test_users.json",
        });
        cy.get("[data-cy=user-query]").type("John");
        cy.get("[data-cy=user-search-btn]").click();
        cy.get("[data-cy=user-card]").contains("johnpapa").should("be.visible");
    });
});
