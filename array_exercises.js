// Question 1
var friends = ["Bob", "Josie", "Sam"],
    enemies = ["Bob", "Josie", "Sam"];

console.log(friends == enemies);

// Question 2
var friends_clone = friends;

console.log(friends_clone == friends);

// Question 3
function lastInArray(array) {
  var len = array.length;
  return array[len - 1];
}
lastInArray([1, 2, 3]);

// Question 4
var first_names = ["Bill", "Mike", "Sally", "Conor", "Belinda"];

function rollCall(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
rollCall(first_names);

// Question 5
var numbers = [1, 2, 3, 4, 5];

function reverseOrder(array) {
  var last_element = array.length - 1,
      reverse_array = [];

  for (var i = last_element; i >= 0; i--) {
    reverse_array.push(array[i]);
  }
  return reverse_array;
}
console.log(reverseOrder(numbers));

// Question 6
function firstInstance(value, array) {
  var position = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      position = i;
      break;
    }
  }
  return position;
}
array = [1, 2, 3, 4, 5];
console.log(firstInstance(3, array));

// Question 7
function arrayToString(array) {
  var string = "";
  for (var i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}
array1 = [1, 2, 3, 4, 5];
array2 = ["Bill", "Bob", "Betty", "Brie"];
array3 = [false, true, null];

console.log(arrayToString(array1));
console.log(arrayToString(array2));
console.log(arrayToString(array3));
