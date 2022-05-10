function AreaOfTriangle(){
    var a = document.getElementById("base").value;
    var b = document.getElementById("height").value;
    var area = (Number(a) * Number(b)) / 2;
    document.getElementById("area").innerHTML = area;
}