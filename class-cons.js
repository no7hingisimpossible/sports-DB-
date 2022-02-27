class Support {
    name;
    designation = 'support web dev';
    address;
    constructor(name, adrs) {
        this.name = name
        this.address = adrs
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const Amir = new Support('Amir Khan', 'Dubai');
const Salman = new Support('Salman Khan')
Salman.startSession()