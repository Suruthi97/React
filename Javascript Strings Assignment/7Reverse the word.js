function Rev(){
    var str = document.getElementById("input").value;
    var out = str.split(" ").map(s => s.split("").reverse().join("")).join(" ");
    document.write("Result: ", out);
    console.log(out);
}