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
    email: 'jon@mail.com',
    num: 5,
};
    
var object2 = {
    name: 'Bobbbby',
    email: 'bobby@mail.com',
    num: 2,
};
    
var object3 = {
    name: 'Julie',
    email: 'Julie@mail.com',
    num: 3,
}

var arrayOfObjects = [object1, object2, object3];

//console.log(arrayOfObjects.sort(longuestString2));

//console.log(arrayOfObjects.sort(alphabeticalMail));

/*Create a function that can be used with Array.prototype.map. This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result.*/

function squareArray(numy) {
    return numy * numy
}

var arrayToSquare = [2, 4, 5, 10];
var arraySquared = arrayToSquare.map(squareArray);

//console.log(arraySquared);

/*Create a function that can be used with Array.prototype.map. 
This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects each containing a “num” property.*/

function squareOfNum(obj) {
    return obj.num * obj.num
}

var arrayOfObjectsSquared = arrayOfObjects.map(squareOfNum);

//console.log(arrayOfObjectsSquared);

/*In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) 
and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order. 
Create a function called operationMaker that takes only a string called operation as argument. 
This string could be “add”, “subtract”, “mult” or “div”. 
Your function will return a function that will take two numbers 
and return the result of running operation on these numbers.*/

/*function adder(num1, num2) {
    return num1 + num2;
}

function substracter(num1, num2) {
    return num1 - num2;
}

function multiplier(num1, num2) {
    return num1 * num2;
}

function divider(num1, num2) {
    return num1 / num2;
}*/

function operationMaker(operation) {
    
    if (operation == "add") {
        var sum = function adder(num1, num2) {
            return num1 + num2;
        }
        return sum;
    }
    else if (operation == "substract") {
        var minus = function substracter(num1, num2) {
            return num1 - num2;
        }
        return minus;
    }
    else if (operation == "mult") {
        var multy = function multiplier(num1, num2) {
            return num1 * num2;
        }
        return multy;
    }
    else if (operation == "div") {
        var division = function divider(num1, num2) {
            return num1 / num2;
        }
        return division;
    }
    else {
        return 0;
    }
}

var test = operationMaker('div');
var testFinal = test(10, 10);

console.log(testFinal);