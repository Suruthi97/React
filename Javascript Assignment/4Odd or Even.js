function OddOrEven(){
    var number = document.getElementById("num").value;
    var a;
    a = number % 2;
    var b = (a==0) ? "Number is Even" : "Number is Odd";
    document.write(b);
}