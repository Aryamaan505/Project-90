function getscore(){
    score=localStorage.getItem("score");
    document.getElementById("addscore").innerHTML="<h1> Score:"+ score +"</h1>";
}

function back(){
    window.location="activity1.html"
}
