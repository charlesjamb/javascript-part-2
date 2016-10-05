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
    var emailToPush = new Email(address, type);
    emailToPush.push(this.email);
}

var test = new Person('Chuck', 'Ham');
console.log(test)
