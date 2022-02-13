$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1){
            $("header").css("background" , "#fff");
        }
            else{
            $("header").css("background" , "none");   
        }
    })

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
        
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
    }
})
