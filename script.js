var i=0; //start awal
var images = [];
var time = 3000;

//list gambar
images[0]= "/images/bkgndImage1.png";
images[1]= "/images/bkgndImage2.png";
images[2]= "/images/bkgndImage3.png";

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


