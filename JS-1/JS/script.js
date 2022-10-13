
/*
x += y - x++ * z;
z = --x - y * 5;
y /= x + 5 % z;
z - x++ + y * 5;
x = y - x++ * z;
*/

var x = 6;
var y = 14;
var z = 4;

x += y - x++ * z;
var result = x;
document.write ("x += y - x++ * z ="+result+"<hr>"); 


var x = 6;
var y = 14;
var z = 4;
z = --x - y * 5;
result = z; 
document.write("z = --x - y * 5 = " + result + "<hr>");



var x = 6;
var y = 14;
var z = 4;
y /= x + 5 % z;
result = y; 
document.write("y /= x + 5 % z = " + result + "<hr>");


var x = 6;
var y = 14;
var z = 4;
z - x++ + y * 5;
result = z - x++ + y * 5; 
document.write("z - x++ + y * 5 = " + result + "<hr>");


var x = 6;
var y = 14;
var z = 4;
x = y - x++ * z;
result = x; 
document.write("x = y - x++ * z = " + result + "<hr>");


/*
x += y - x++ * z =-4
z = --x - y * 5 = -65
y /= x + 5 % z = 2
z - x++ + y * 5 = 67
x = y - x++ * z = -10
*/


