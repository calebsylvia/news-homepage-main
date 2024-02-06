let webImg = document.getElementById("webImg");

window.addEventListener('resize', () => {
    if(window.matchMedia('(max-width:426px').matches){
        webImg.src = "./assets/images/image-web-3-mobile.jpg";
    }else{
        webImg.src = "assets/images/image-web-3-desktop.jpg";
    }
})