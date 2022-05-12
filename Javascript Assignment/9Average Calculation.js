function Average(){
    var Salmans1 = document.getElementById("Sscore1").value;
    var Salmans2 = document.getElementById("Sscore2").value;
    var Salmans3 = document.getElementById("Sscore3").value;
    var Mikes1 = document.getElementById("Miscore1").value;
    var Mikes2 = document.getElementById("Miscore2").value;
    var Mikes3 = document.getElementById("Miscore3").value;
    var Marys1 = document.getElementById("Mascore1").value;
    var Marys2 = document.getElementById("Mascore2").value;
    var Marys3 = document.getElementById("Mascore3").value;
    var Salmanavg = (Number(Salmans1) + Number(Salmans2) + Number(Salmans3)) / 3;
    var Mikeavg = (Number(Mikes1) + Number(Mikes2) + Number(Mikes3)) / 3;
    var Maryavg = (Number(Marys1) + Number(Marys2) + Number(Marys3)) / 3;
    document.write("Average score of Salman's Team is: ", Salmanavg);
    document.write("<br/>Average score of Mike's Team is: ", Mikeavg);
    document.write("<br/>Average score of Mary's Team is: ", Maryavg);
    if((Salmanavg>Mikeavg) && (Salmanavg>Maryavg)){
        console.log("Salman's Team is the Winner of the Basketball game");
    }
    else if(Mikeavg>Maryavg){
        console.log("Mike's Team is the Winner of the Basketball game");
    }
    else if(Mikeavg<Maryavg){
        console.log("Mary's Team is the Winner of the Basketball game");
    }
    else{
        console.log("Draw Basketball game");
    }
}