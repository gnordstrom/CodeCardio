// ---------------------------------------------------- //
//                                                      //
//    ==================  ARRAYS  ==================    //
//                                                      //
// ---------------------------------------------------- //

// ************************ Section 2 *********************************** //
// -------------------->      2.1     <-------------------- //
// Push each index onto the numbers array
function maker() {
    var numbers = [];
    for(var i =0; i <= 25; i++) {
       // Code here
       numbers.push(i);
    }
    return numbers;
}

// -------------------->      2.2     <-------------------- //
// Fill the numbers array with numbers 0 to 31, then returns the array.
function count31() {
    var numbers = [];
   // Code Here
   for (var i = 0; i < 32; i++) {
    numbers.push(i);
  }
    return numbers;
}
// -------------------->      2.3     <-------------------- //
// Below we have a function that will loop over an array in reverse.
// What you need to do is add the index to the newArray on every iteration.
function backWards(arr) {
  var newArray = [];
     for (var i = arr.length - 1; i >= 0; i--) {
        // Code here
        newArray.push(i);
     }
  return newArray;
 }

// -------------------->      2.4     <-------------------- //
// Below we have a function called 'findInArray' that takes in two parameters,
// the first representing the array to be searched and the second representing
// the value to be searched for. Return true if the array has the value.
function findInArray(arr,value) {
    // Code Here
    for (var i = 0; i < arr.length; i++) {
      if (arr.indexOf(value)) {
        return true;
      }
    }
}

// -------------------->      2.5     <-------------------- //
// Create a for loop that adds 10 to each item in an array.
// Assume that all the items in the array are integers.
function addTen(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
  // Add 10 to each item in the array then push the new total onto the newArr
      newArr.push(arr[i] + 10);
    }
    return newArr;
}

// -------------------->      2.6     <-------------------- //
// This problem is the same as the previous problem, the only difference
// is that we have both strings and integers in our numbers array.
// You will need to parse the strings into integers before you add ten.
function addTen(arr) {
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
      // Create a variable called newItem then parse arr[i] and add 10.
      var newItem = parseInt(arr[i]) + 10;
      // We've already taken care of pushing the newItem onto the newArr
        newArr.push(newItem);
    }
    return newArr;
}




// ************************ Section 3 *********************************** //

// -------------------->      3.1     <-------------------- //
// Imagine a world where you have an array of user objects, and you need to
// delete one of those users. Inside your if statement, remove the object
// from the array of objects.
function deleteUser(array, property, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][property] === value) {
            // Code Here
            array.splice(i, 1);
        }
    }
   return array;
}

// -------------------->      3.2     <-------------------- //
// Inside your if statement, update the user's email property to the
// newEmail being passed in.
function updateUserEmail(array, property, value, newEmail) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][property] === value) {
          // Code Here
          array[i].email = newEmail;
        }
    }
    return array;
}

// -------------------->      3.3     <-------------------- //
// On each iteration, check the array index for a property that is equal to
// the value being passed in. If that condition is met, change the object's
// password property value to equal newPassword.
function changePassword(array, property, value, newPassword) {
    for(var i = 0; i < array.length; i++ ) {
        // Code Here
      if (array[i].value === value) {
        array[i].password = newPassword;
      }
    }
    return array;
}

// -------------------->      3.4     <-------------------- //
// This is another way to find the index of a property in an array of objects.
// The array parameter is an array of objects. Using the array parameter and
// the index variable, update the object email address (.email or ["email"])
// to be the newEmail parameter.

function changeEmail(array, value, newEmail) {
    var index = array.map(function(e) {
        return e.userId;
    }).indexOf(value);
    // Code here
    array[index].email = newEmail; // MY CODE
    return array;
}

// -------------------->      3.5     <-------------------- //
// Write a function called updateUserInfo that will take 5 parameters
// (array, property, value, newEmail, and newName). The array parameter is
// an array of objects. Have the function loop through the array of objects.
// If the property parameter, a key of the objects, equals the value parameter,
// then update the email property value to be newEmail and the name property
// value to be newName. When you are done, return the array.

// Code Here
function updateUserInfo(array, property, value, newEmail, newName) {
  for (var i = 0; i < array.length; i++) {
  	if (array[i][property] === value) {
    	array[i].email = newEmail;
      	array[i].name = newName;
    }
  }
  return array;
}
