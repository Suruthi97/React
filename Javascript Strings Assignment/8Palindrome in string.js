function Palindrome(){
    var str = document.getElementById("input").value;
    var out = str;
    var res = out.split('').reverse().join('');
    console.log("Original string: ", str);
    console.log("Reverse string: ", res);
    var bool = true;
    if(res == str){
        document.write("The given string is a Palindrome: ", bool);
    }
    else{
        bool = false;
        document.write("The given string is a Palindrome: ", bool);
    }
}