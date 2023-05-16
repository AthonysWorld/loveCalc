function love(){
    var input = document.getElementById("input1").value
    var inputTwo = document.getElementById("input2").value
    var res= Math.random()*100;
    res=Math.floor(res)+1;
    console.log("love")
    if( res >= 50){
        alert( input+" your love compatibility score is " + res+ "%," + " Your relationship is perfect, you and "+inputTwo+ " are incredibly compatible.");
    }  else{ alert(input+" your love score is "+res+"%"+ " sorry to say, you and "+inputTwo+" don't seem like a perfect match.");}
}