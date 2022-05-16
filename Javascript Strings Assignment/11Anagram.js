function Anagram(){
    var str = document.getElementById("input").value;
    var str1 = document.getElementById("input1").value;
    var out = str.toLowerCase().split('');
    var out1 = str1.toLowerCase().split('');
    var bool = true;
    var ascendingOrder = out.sort();
    var ascendingOrder1 = out1.sort();
    for(var i=0; i<ascendingOrder.length; i++){
        for(i=0; i<ascendingOrder1.length; i++){
            if(ascendingOrder[i] == ascendingOrder1[i]){
                bool=true;
            }
            else{
                bool=false;
                break;
            }
        }
    }
    document.write("Anagram? ",bool);
}