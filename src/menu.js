const prompt = require('prompt-sync')({ sigint: true });
const { Incident, TicketManager } = require('./index.js');
const { greetTime } = require('./greeting.js')
const showMenu = () => {
    let isRunning = true;

    const tm = new TicketManager();

    while(isRunning){
        greetTime();
        console.log('Menu:');
        console.log('1. Open Ticket');
        console.log('2. Assign Ticket');
        console.log('3. Resolve Ticket');
        console.log('4. Find your Ticket');
        console.log('5. Exit');


        const menuChoice = prompt('What would you like to do today? (choose 1-4) ');
        if(menuChoice === '1'){
            const describe = prompt('What is the problem?: ');
            const severity = prompt('What is the severity?: ')
            tm.createTicket(describe, severity);
        } else if (menuChoice === '2') {
            const idNum = prompt('What is your ID number?: ');
            const incident = prompt('Who would you like to assign this ticket to?: ');
            const id = Number(idNum);
            tm.assignTicket(id, incident);
        } else if (menuChoice === '3') {
            const toDelete = prompt('Enter Ticket ID to resolve: ');
            const note = prompt('Add a note: ');
            const resolve = Number(toDelete);
            tm.resolveTicket(resolve, note);
        } else if(menuChoice === '4'){
            const find = prompt('Input Ticket ID please. ')
            console.log(tm.getTicketById(Number(find)))
        } else if(menuChoice === '5'){
            isRunning = false
        } else {
            console.log('That option does not exist, please try again')
        }
        prompt('\nPress Enter to continue...');
        console.clear();
    };
}
module.exports = { showMenu }
