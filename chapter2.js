/* ===========================
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var n = 1;
while (n <= 7){
    var str = "";
    //for (var i=1; i<=n; i++){
    //    str += "#";
    //}
    while (str.length <= n){
        str += "#";
    }
    console.log(str);
    n++;
}


/* ===========================
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5
 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible
by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
for (var i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if (i % 3 === 0){
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}

/* ===========================
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters
to separate lines. At each position of the grid there is either a space or a “#” character.
The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change
the program so that it works for any size, outputting a grid of the given width and height.
*/
function grid(n){
    var row, col = 1, strOdd = "", strEven = "", result = "";
    while (col <= n){
        if (col % 2 === 0){
            strOdd += "#";
            strEven += " "
        }else {
            strOdd += " ";
            strEven += "#"
        }
        col ++;
    }
    console.log(strOdd);
    console.log(strEven);

    for (rol=1; rol<=n; rol++){
        result += rol % 2 === 0 ? strEven + "\n" : strOdd + "\n";
    }
    console.log(result);
}

grid(8);

function grid2(n){
    var row, col, result = "";
    for (row=1; row<=n; row++){
        for (col=1; col<=n; col++){
            result += (row + col) % 2 === 0 ? " " : "#";
        }
        result += "\n";
    }
    console.log(result);
}
grid2(8);


/* ===========================

*/


/* ===========================

*/


/* ===========================

*/


/* ===========================

*/


/* ===========================

*/