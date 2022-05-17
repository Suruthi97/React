function High(){
    var str = document.getElementById("input").value;
    var out = str.toLowerCase().split('');
    var count = 0;
    for(var i=0; i<out.length; i++){
        for(var j=0; j<out.length; j++){
            if(out[i] == out[j+1]){
                count = count+1;
            }
        }
        console.log()
    }
}