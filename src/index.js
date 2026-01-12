class Incident {
    constructor(id, description, priority) {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.status = "open";
        this.assignedTo = null;
        this.history = [
            {
                timestamp: new Date().toISOString(),
                message: "Incident created",
            },
        ]
    }
    assignTicket(name) {
        this.assignedTo = name;
        this.updateTicket(`Assigned ${name}`)
    }
    updateTicket(message) {
        this.history.push({
            timestamp: new Date().toISOString(),
            message,
        });
    }
    resolveTicket(note) {
        this.status = "resolved"
        this.updateTicket(`Resolved ticket ${this.id}: ${note}`)
    }
}

class TicketManager {
    constructor() {
        this.tickets = [];
        this.nextId = 1;
    }
    createTicket(description, priority) {
        // Creates an incident ticket with and adds it to the tickets array
        const id = this.nextId;
        const newTicket = new Incident(id, description, priority);
        this.tickets.push(newTicket);
        this.nextId++;
        return newTicket;
    }
    getTicketById(id) {
        // Find a specific ticket in the array
        return this.tickets.find((ticket) => ticket.id === id)
    }
    assignTicket(id, name) {
        // Assign a ticeket
        const ticket = this.tickets.find(ticket => ticket.id === id);
    
        if (!ticket) {
            console.log("ticket does not exist");
            return;
        }
    
        ticket.assignTicket(name);
    }
    
    resolveTicket(id, note) {
        // Resolve the ticket
        const ticket = this.tickets.find(ticket => ticket.id === id);
        if(!ticket) {
            console.log("ticket does not exist")
            return;
        }
        ticket.resolveTicket(note);
    }
};

module.exports = {
    Incident,
    TicketManager
}