function Prime(){
    var num = document.getElementById("number").value;
    var prime = true;
    var i = 2;
    if(num == 1){
        prime = false;
    }
    else if(num > 1){
        for(i=2; i<num; i++){
            if(num%i == 0){
                prime = false;
            }
        }
    }
    if(prime == true){
        document.write("It is a prime number");
    }
    else{
        document.write("Not a prime number");
    }
}