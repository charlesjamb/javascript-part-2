/*Read about the Array.prototype.sort method. Create a function that can be used with sort. 
This function should take two strings, and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings and try to get it sorted using your new function.*/

function longuestString(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    }
    else if (str1.length < str2.length) {
        return -1;
    }
    else {
        return 0;
    }
}

var arrayOfString = ['blabla', 'blablablabla', 'bla', 'blablabla', 'yo!']

arrayOfString.sort(longuestString);

/*Create an array of objects (don’t need to use new here, just regular object literals). 
These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail address in alphabetical order.*/

function longuestString2(str1, str2) {
    if (str1.name.length > str2.name.length) {
        return 1;
    }
    else if (str1.name.length < str2.name.length) {
        return -1;
    }
    else {
        return 0;
    }
}

function alphabeticalMail(str1, str2) {
    if (str1.email.toLowerCase() > str2.email.toLowerCase()) {
        return 1;
    }
    else if (str1.email.toLowerCase() < str2.email.toLowerCase()) {
        return -1;
    }
    else {
        return 0;
    }
}

var object1 = {
    name: 'Jonnnnny',
    email: 'jon@mail.com'
};
    
var object2 = {
    name: 'Bobbbby',
    email: 'bobby@mail.com'
};
    
var object3 = {
    name: 'Julie',
    email: 'Julie@mail.com'
}

var arrayOfObjects = [object1, object2, object3];

//console.log(arrayOfObjects.sort(longuestString2));

//console.log(arrayOfObjects.sort(alphabeticalMail));


