function BMI(){
    var massH = document.getElementById("mass1").value;
    var heightH = document.getElementById("height1").value;
    var massS = document.getElementById("mass2").value;
    var heightS = document.getElementById("height2").value;
    var bmiH = massH / (heightH * heightH);
    var bmiS = massS / (heightS * heightS);
    var bool = true;
    if(bmiH > bmiS){
        bool = false;
        document.write("Harry's BMI is higher than Salman");
        console.log("Is Salman's BMI greater than Harry?",bool);
    }
    else if(bmiH < bmiS){
        document.write("Salman's BMI is higher than Harry");
        console.log("Is Salman's BMI greater than Harry?",bool);
    }
    else{
        document.write("BMI of Harry and Salman are same");
        console.log("Both BMI are same");
    }
}