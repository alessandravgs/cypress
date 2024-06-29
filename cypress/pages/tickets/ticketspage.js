class TicketsPage{

    constructor(){
        this.firstName = "#first-name";
        this.lastName = "#last-name";
        this.email = "#email";
        this.ticketQuantity = "#ticket-quantity";
        this.vip = "#vip";
        this.publication = "#publication";
        this.agree = "#agree";
        this.submitButton = "button[type='submit']";
        this.success = ".success";
    }

    get FirstName(){
        return cy.get(this.firstName);
    }

    get LastName(){
        return cy.get(this.lastName);
    }

    get Email(){
        return cy.get(this.email);
    }
    
    get TicketQuantity(){
        return cy.get(this.ticketQuantity);
    }

    get Vip(){
        return cy.get(this.vip);
    }

    get Publication(){
        return cy.get(this.publication);
    }

    get Agree(){
        return cy.get(this.agree);
    }

    get SubmitButton(){
        return cy.get(this.submitButton);
    }

    get Success(){
        return cy.get(this.success);
    }

}


const ticktesPage = new TicketsPage();
export default ticktesPage;