
document.getElementById("modal").onclick = function(){
    if(document.getElementById("modal").style.display != "none"){
        document.getElementById("modal").style.display = "none";
    }
}

document.getElementById("downloadButton").onclick = function(){
    document.getElementById("modal").style.display = "";
}
