/// <reference types="cypress"/>

describe("Testes de Backend", () =>{

    //beforeEach (() => cy.visit("https://httpbin.org/get"))

    it("Requisição Get", () => {
        cy.request("https://httpbin.org/get")
            .should(function(response){
                const {status, statusText} = response;
                expect(status).to.be.equal(200);
                expect(statusText).to.be.equal("OK");
            })
    });

    it("Requisição Post", () =>{
        cy.request({
            method: "POST", 
            url: "https://httpbin.org/post",
            body: {
                name: "Alessandra",
                age: "22"
            }
        }).should(function(response){
            const {status, statusText} = response;
            expect(status).to.be.equal(200);
            expect(statusText).to.be.equal("OK");
        })
    });

    it("Requisição Post Two", () =>{
        cy.request({
            method: "POST", 
            url: "https://httpbin.org/post",
            body: {
                name: "Alessandra",
                age: "22"
            }
        }).its("body").should("not.be.empty")
    });

})