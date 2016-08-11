// eloquentJavaScript.net
// Chapter 5: Hight Order Functions

/* ===========================
Flattening

Use the reduce method in combination with the concat method to “flatten” an
array of arrays into a single array that has all the elements of the input
arrays.
// → [1, 2, 3, 4, 5, 6]
*/
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a, b){
    if (Object.prototype.toString.call(b) === "[object array"){
        return a.concat(b);
    }else {
        a.push(b); //???
    }
 }, []));


/* ===========================
Mother-child age difference

Using the example data set from this chapter, compute the average age
difference between mothers and children (the age of the mother when the
child is born). You can use the average function defined earlier in this
chapter.

Note that not all the mothers mentioned in the data are themselves present
in the array. The byName object, which makes it easy to find a person’s
object from their name, might be useful here.
// → 31.2
*/
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDifferenceArr = ancestry.map(function(person){
    if (byName[person.mother]){
        return person.born - byName[person.mother].born;
    }else {
        return null;
    }
});

ageDifferenceArr = ageDifferenceArr.filter(function(elem){
    if (elem){
        return elem;
    }
});

console.log(average(ageDifferenceArr));
/* ===========================
Historical life expectancy

When we looked up all the people in our data set that lived more than 90 years,
 only the latest generation in the data came out. Let’s take a closer look at
 that phenomenon.

Compute and output the average age of the people in the ancestry data set per
century. A person is assigned to a century by taking their year of death,
dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

For bonus points, write a function groupBy that abstracts the grouping
operation. It should accept as arguments an array and a function that
computes the group for an element in the array and returns an object that
maps group names to arrays of group members.
*/
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ageByCentury = {};

ancestry.forEach(function(person){
    var century = Math.ceil(person.died / 100);
    var age = person.died - person.born;
    ageByCentury[century] ? ageByCentury[century].push(age) : ageByCentury[century] = [age];
});

for (var century in ageByCentury){
    console.log(century + ": " + average(ageByCentury[century]));
}

function groupBy(arr, func){
    var result = {};
    arr.forEach(func(elem){
        result[func(elem)] ? result[func(elem)].push(elem) : result[func(elem)] = [elem];
    })
}

/* ===========================
Every and then some

Arrays also come with the standard methods every and some. Both take a
predicate function that, when called with an array element as argument,
returns true or false. Just like && returns a true value only when the
expressions on both sides are true, every returns true only when the
predicate returns true for all elements of the array. Similarly, some returns
true as soon as the predicate returns true for any of the elements. They do
not process more elements than necessary—for example, if some finds that the
predicate holds for the first element of the array, it will not look at the
values after that.

Write two functions, every and some, that behave like these methods, except
that they take the array as their first argument rather than being a method.
*/
function every(arr, f){
    for (var i = 0; i < arr.length; i++){
        if (!f(arr[i]){
            return false;
        }
    }
    return true;
}

function some(arr, f){
    for (var i = 0; i < arr.length; i++){
        if(f(arr[i])){
            return true;
        }
    }
    return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

