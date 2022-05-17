function High(){
    var str = document.getElementById("input").value;
    var ip = str.toLowerCase().split('').sort();
    var maxcount=0, out;
    var count = 1;
    var len=ip.length;
    for(var i=1; i<=len; i++){
        if ((i == len) || (ip[i] != ip[i - 1]))
        {
            if (maxcount < count)
            {
                maxcount = count;
                out = ip[i - 1];
            }
            count = 1;
        }
        else
        {
            count++;
        }
    }
    document.write("Maximum occurring character is :", out);
}