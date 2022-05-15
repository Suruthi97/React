function Vowels(){
    var str = document.getElementById("input").value;
    var out = str.split('');
    for(var i=0; i<out.length; i++) {
        if(str.charAt(i) == 'a'||str.charAt(i) == 'e'||str.charAt(i) == 'i'||str.charAt(i) == 'o'||str.charAt(i) == 'u'){
            document.write("<br/>",out[i]);
        }
    }
}