function Rev(){
    var str = document.getElementById("input").value;
    var out = str.split('').reverse().join('');
    document.write("Result: ", out);
    console.log(out);
}