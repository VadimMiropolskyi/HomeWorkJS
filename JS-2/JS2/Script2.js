//1) Дано два числа А и В где (А < B). Ввидите на экран сумму всех чисел, расположенных в числовом промежутке от А до В.

document.write("Дано два числа А и В где (А < B). Ввидите на экран сумму всех чисел, расположенных в числовом промежутке от А до В.");
document.write("<br>");
var a = 3;
var b = 10;
var c = 0;
for (i = a; i <= b; i++) {         
c += i
document.write(c)
document.write("<br>")}
document.write("<br>");
document.write('<hr nodashed size="1px" style="border:dotted">')


//2) Дано два числа А и В где (А < B). Ввидите на экран все нечётные числа в числовом промежутке от А до В.
document.write("Дано два числа А и В где (А < B). Ввидите на экран все нечётные числа в числовом промежутке от А до В.");
document.write("<br>");
for (i = a; i <= b; i++) {  
if (i % 2 == !0) {
document.write(i);
document.write("<br>");
}
}

