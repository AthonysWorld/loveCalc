function love(){
    var res= Math.random()*100;
    res=Math.floor(res)+1;
    console.log("love")
    if( res >= 50){
        alert("your love score is "+res+"%,"+ " Your relationship is perfect and you and your partner are incredibly compatible.");
    }  else{ alert("your love score is "+res+"%"+ " sorry to say, you don't seem like a perfect match.");}
}