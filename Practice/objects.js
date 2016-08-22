// ----------------------------------------------------  //
//                                                       //
//    ==================  OBJECTS  ==================    //
//                                                       //
// ----------------------------------------------------  //

// ************************ Section 1 *********************************** //
// -------------------->      1.1     <-------------------- //
// Using dot notation return the firstname
function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
};
// Code Here
return person.firstname;
}

// -------------------->      1.2     <-------------------- //
// Using bracket notation return the location
function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
};
  // Code here
  return person['location'];
}


// -------------------->      1.3     <-------------------- //
// Using dot notation add a new property called frontpocket with the value
// equal to compass.
var backpack = {};
// Code Here
backpack.frontpocket = 'compass';

// -------------------->      1.4     <-------------------- //
// Using dot notation access the frontpocket property on the backpack object.
var backpack = {
    frontpocket: "compass"
};
// Code Here
var backpackFrontpocket = backpack.frontpocket;

// -------------------->      1.5     <-------------------- //
// Using bracket notation add a new property (material) to the box object
// with the value equal to cardboard.
var box = {};
// Code Here
box['material'] = 'cardboard';

// -------------------->      1.6     <-------------------- //
// Creating a variable called name and assign it the firstname property.
var person = {};
person["firstname"] = "sally";
//code here
var name = person.firstname;



// ************************ Section 2 *********************************** //

// -------------------->      2.1     <-------------------- //
// Below we have a function called objectLooper that will take a number object
// and loop over it. You need to change the value of each property to 0.
var number = {
    age: 30,
    score: 100,
    length: 12,
    year: 2016
};

function objectLooper(number) {
    for (key in number) {
        //code here
        number[key] = 0;
    }
  return number;
}

// -------------------->      2.2     <-------------------- //
// check each value and if value is greater than 3000000, if true, set it to 0.
var state = {
    utah: 2942902,
    texas: 26956958,
    california: 38802500
};

function stateLooper(arr) {
    for(key in arr) {
        // Code Here
        if (arr[key] > 3000000) {
          arr[key] = 0;
        }
    }
  return arr;
}

// -------------------->      2.3     <-------------------- //
// Loop through the user object and check if values are falsy.
// Return the falsy values.
var user = {
    name: 'Sally Rally',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'SallyRally801',
    age: 0
};

function cleanUser(obj) {
    for(key in obj) {
    //    if(/*code here*/) {
      if (obj[key] !== true) {
          console.log(key);
        }
    }
}

// -------------------->      2.4     <-------------------- //
// If the value is falsy remove it.
// Once all the falsy value are removed return the obj
var user = {
    name: 'Sally Rally',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'SallyRally801',
    age: 0
};

function cleanUser(obj) {
	//code here
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
}

// -------------------->      2.5     <-------------------- //
// Change the value of name to Ryan, change the value of pwHash to 43df90w_h
// and change the value of username to ryanleeeallred.
// After you have updated all the values return the new object.
var user = {
    name: 'Sally Rally',
    pwHash: 'U+Ldlngx2BYQk',
    username: 'SallyRally801'
};

function personalize(user) {
   // Code Here
  user.name = 'Ryan';
  user.pwHash = '43df90w_h';
  user.username = 'ryanleeeallred';
  return user;
}



// ************************ Section 3 *********************************** //

// -------------------->      3.1     <-------------------- //
// Find and update the email property then return the new email
function updateEmail(obj, str) {
    obj.email = str;
    return obj.email;
}

// -------------------->      3.2     <-------------------- //
// // Write a function called isOldEnough that takes a person obj and checks if
// the person is old enough to enter the club.
// If they are 21 or older return true else return false.
// The person's age can be found on the age property/key.
function isOldEnough(obj) {
	for (var age in obj) {
    	if (obj.age > 21) {
        	return true;
        } else {
        	return false;
        }
    }
}


// -------------------->      3.3     <-------------------- //
// Create a function called addRole that takes in a user object and a string.
// This string will represent the user's new role in the system (i.e. admin,
// creator, editor, visitor). Create a new property on the user object called
// "role" and assign the passed in string to it, then return the
// updated obj.role. Make sure you only return the obj.role
// otherwise the test will fail.
function addRole(obj, str) {
	// obj['role'] = str;
  obj.role = str;
  return obj.role;
}


// -------------------->      3.4     <-------------------- //
// Write a for in loop that loops the object being passed in and checks if
// the value of the property is null, undefined or false.
// If any of these conditions are met then delete that property.
function removeFalsy(obj) {
    for (var prop in obj) {
    	if (!obj[prop]) {
        	delete obj[prop];
        }
    }
    return obj;
}


// -------------------->      3.5     <-------------------- //
// Create a function called zeroOut that take a user object and then loops over
// that object and changes all the values to 0.
// Return the user object at the end.
// Code Here
function zeroOut(obj) {
	for (var prop in obj) {
    	obj[prop] = 0;
    }
  return obj;
}
