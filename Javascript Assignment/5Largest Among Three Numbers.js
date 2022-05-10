function Largest(){
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var large1 = num1>num2 ? Number(num1) : Number(num2);
    var large2 = large1>num3 ? Number(large1) : Number(num3);
    document.write("Largest amoung three numbers is: <br/><br/>",large2);
}