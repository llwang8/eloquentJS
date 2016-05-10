/* ===========================
The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a
range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing
all the numbers from start up to (and including) end.


Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates
the “step” value used to build up the array. If no step is given, the array elements go up by
increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should
return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

function range(start, end, step){
    var result = [];
    if (!step){
        step = 1;
    }
    if (start > end && step < 0) {
        for (var i = start; i >= end; i += step ){   //!!!
            result.push(i);
        }
    }else if(start <=end && step >0){
        for (var i = start; i <= end; i += step){
            result.push(i);
        }
    }else {
        return "invalid input";
    }

    return result;  //!!!
}

console.log(range(5, 2, -1));

function sum(arr){
    if (Object.prototype.toString.call(arr) !== "[object Array]"){  ////!!!
        return "error input";
    }
    return arr.reduce(function(sum, item){
        return sum + item;
    }, 0);
}


console.log(sum(range(1, 10)));


/* ===========================
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the same elements in the
inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the
array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which
variant do you expect to be useful in more situations? Which one is more efficient?
*/
function reverseArray(arr){
    var i, result = [];
    for (i = arr.length; i >= 0; i--){
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(arr){
    var i, temp;
    for (i = 0; i < Math.floor(arr.length / 2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1 -i] = temp;
    }
    return arr;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/* ===========================
A list
Write a function arrayToList that builds up a data structure like the previous one when given
[1, 2, 3] as argument, and write a listToArray function that produces an array from a list.
Also write the helper functions prepend, which takes an element and a list and creates a new list
that adds the element to the front of the input list, and nth, which takes a list and a number and
returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/
var List = {
    value: null,
    rest: null,
};

function arrayToList(arr){
    var nList = new List();
    nList.value = arr[-1];
    for (var i = 0; i < arr.length - 1; i++){
        nList = prepend(arr[i], nList);
    }
    return nList;
}

function listToArray(list){
    var result = [];
    while (list.rest){
        result.push(list.value);
        list = list.rest;
    }
    return result;
}

function prepend(val, list){
    var newList = new List();
    newList.value = val;
    newList.rest = list;
    return newList;
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, n){
    var i = 0;
    while(i < n && list.rest) {
        list = list.rest;
        i++;
    }
    if (i === n){
        return list.value;
    }else {
        return "";
    }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

function nthRecursive(list, n){
    if (n === 0 && list){
        return list.value;
    }
    if (list.rest && n > 0){
        return nthRecursive(list.rest, n -1 );
    }else {
        return "";
    }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/* ===========================
Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the
values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same
value or are objects with the same properties whose values are also equal when compared with a
recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by
looking at their properties, you can use the typeof operator. If it produces "object" for both
values, you should do a deep comparison. But you have to take one silly exception into account:
by a historical accident, typeof null also produces "object".
*/




