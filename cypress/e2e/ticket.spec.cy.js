/// <reference types="cypress"/>
import ticktesPage from "../pages/tickets/ticketsPage";

describe("Testes de Tickets", () =>{

    beforeEach (() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    it ("TC01 - Input First and Last name", () =>{

        const firstName = "Daniel";
        const lastName = "Lopes";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get(".agreement p").should('contain', `I, ${fullName}, wish to buy`);

    })

    it ("TC02 - Purchase Tickets", () =>{

        const firstName = "Daniel";
        const lastName = "Lopes";
        const email = "email@email.com";
        const textFull = "Teste teste teste" + "Teste teste teste";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type(email);
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#publication").check();
        cy.get(".agreement p").should('contain', `I, ${fullName}, wish to buy`);

        cy.get("#agree").check();
        cy.get("#signature").type(fullName, {delay: 0});
        cy.get("button[type='submit']").click();
        
        cy.get(".success").should("be.visible");
        cy.get(".success").should("have.text", "Ticket(s) successfully ordered.");

    })

    it ("TC03 Compra de ingressos otimizados", () => {
        cy.preencherCamposObrigatorios();
        ticktesPage.Success.should("be.visible");
        ticktesPage.Success.should("have.text", "Ticket(s) successfully ordered.");
    })

})