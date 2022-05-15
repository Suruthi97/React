function StringIntoArray(){
    var str = document.getElementById("input").value;
    var out = str.split('');
    document.write("Result: ", out);
    console.log(out);
}