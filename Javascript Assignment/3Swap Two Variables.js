function Swap(){
    var var1 = document.getElementById("variable1").value;
    var var2 = document.getElementById("variable2").value;
    var swap;
    swap = var1;
    var1 = var2;
    var2 = swap;
    document.write("Value of Variable1 after swapping is:&nbsp", var1);
    document.write("<br/>Value of Variable2 after swapping is:&nbsp", var2);
}