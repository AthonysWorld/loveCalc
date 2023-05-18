function love(){
    var input = document.getElementById("input").value
    var input2 = document.getElementById("ann").value
    var res= Math.random()*100;
    res=Math.floor(res)+1;
    console.log("love")
    if( res >= 50){
       document.querySelector("h2").innerHTML=( input +" your love compatibility score is " + res+ "%," + " Your relationship is perfect, you and "+input2+ " are incredibly compatible  &#128525")
    }  else{ 
        document.querySelector("h2").innerHTML=input+" your love score is "+res+"%"+ " sorry to say, you and "+input2+" don't seem like a perfect match &#128532"
    }
}
