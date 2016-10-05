//the addressbook 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = [];
};

function Email(address, type) {
    this.address = address;
    if (type === 'work' || type === 'home') {
        this.type = type 
    }
    else {this.type = 'other';}
};

Person.prototype.addEmail = function(address, type) {
    this.email.push(new Email(address, type));
}

var chuck = new Person('Chuck', 'Ham');
chuck.addEmail("hillary@hackedemails.com", "home");

console.log(chuck);