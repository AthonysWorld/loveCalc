function love(){
    var res= Math.random()*100;
    res=Math.floor(res)+1;
    console.log("love")
    if( res >= 50){
        alert("your love score is "+res+"%"+ " you are are so good together.");
    }  else{ alert("your love score is "+res+"%"+ " sorry to say, you don't seem like a perfect match.");}
}