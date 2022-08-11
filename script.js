var i=0; //start awal
var images = [];
var time = 3000;

//list gambar
images[0]= "/images/bkgndImage1.png";
images[1]= "/images/bkgndImage2.png";
images[2]= "/images/bkgndImage3.png";
images[3]= "/images/bkgndImage4.png";

//ganti gambar
function gantiGambar(){
    document.slide.src = images[i];
    if (i<images.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("gantiGambar()",time);
}

window.onload=gantiGambar;

//ganti gambar 

$(document).ready(function(){

    $(".exit1").hide();

    $(".clean1").hover(function(){
        $(".clean1").fadeOut();
        $(".exit1").fadeIn();
    });    

    $(".clean1").mouseleave(function(){
        $(".exit1").fadeOut();
        $(".clean1").fadeIn();
    });    

});

$(document).ready(function(){

    $(".exit2").hide();

    $(".clean2").hover(function(){
        $(".clean2").fadeOut();
        $(".exit2").fadeIn();
    });    

    $(".clean2").mouseleave(function(){
        $(".exit2").fadeOut();
        $(".clean2").fadeIn();
    });    

});

$(document).ready(function(){

    $(".exit3").hide();

    $(".clean3").hover(function(){
        $(".clean3").fadeOut();
        $(".exit3").fadeIn();
    });    

    $(".clean3").mouseleave(function(){
        $(".exit3").fadeOut();
        $(".clean3").fadeIn();
    });    

});