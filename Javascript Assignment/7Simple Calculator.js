function Add(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var add = Number(a) + Number(b);
    document.write("Addition of two numbers is:", add);
}
function Subract(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var sub = Number(a) - Number(b);
    document.write("Subraction of two numbers is:", sub);
}
function Multiply(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var mul = Number(a) * Number(b);
    document.write("Multiplication of two numbers is:", mul);
}
function Divide(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var div = Number(a) / Number(b);
    document.write("Division of two numbers is:", div);
}
function Modulus(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var mod = Number(a) % Number(b);
    document.write("Modulus of two numbers is:", mod);
}
function Increment(){
    var a = document.getElementById("firstnumber").value;
    var inc = Number(a++);
    document.write("Increment of number is:", inc);
}
function Decrement(){
    var a = document.getElementById("firstnumber").value;
    var dec = Number(--a);
    document.write("Decrement of number is:", dec);
}
function GreaterThan(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var great = a>b ? Number(a) : Number(b);
    document.write("Greater number is:", great);
}
function LesserThan(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var less = a<b ? Number(a) : Number(b);
    document.write("Small number is:", less);
}
function GreaterThanEqualTo(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var great1 = a>=b ? "True" : "False";
    document.write("Result:", great1);
}
function LesserThanEqualTo(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var less1 = a<=b ? "True" : "False";
    document.write("Result:", less1);
}
function DoubleEqual(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var dou = a==b ? "True" : "False";
    document.write("Result:", dou);
}
function TripleEqual(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var dou = a===b ? "True" : "False";
    document.write("Result:", dou);
}
function NotEqual(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var not = a!=b ? "True" : "False";
    document.write("Result:", not);
}