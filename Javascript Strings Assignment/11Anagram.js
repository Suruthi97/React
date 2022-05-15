function Anagram(){
    var str = document.getElementById("input").value;
    var str1 = document.getElementById("input1").value;
    var out = str.toLowerCase().split('');
    var out1 = str1.toLowerCase().split('');
    var bool = true;
    var ascendingOrder = out.sort();
    var ascendingOrder1 = out1.sort();
    if(ascendingOrder == ascendingOrder1){
        document.write("Anagram? ",bool);
    }
    else{
        bool = false;
        document.write("Anagram? ",bool);
    }
}