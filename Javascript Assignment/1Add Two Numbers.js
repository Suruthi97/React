function Add(){
    var a = document.getElementById("firstnumber").value;
    var b = document.getElementById("secondnumber").value;
    var add = Number(a) + Number(b);
    document.getElementById("add").innerHTML = add;
}