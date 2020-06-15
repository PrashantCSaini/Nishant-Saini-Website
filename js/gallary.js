// Image Functions
function showImage(imgPath, imgText, galleryId) {
    var curImage = document.getElementById('currentImg-' + galleryId);
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
}

function changeActiveState(value) {
    var el = document.getElementById('carousel-' + value);
    var list = el.getElementsByTagName("img");
    var curImage = document.getElementById('currentImg-' + value);
    curImage.src = list[1].src;
    curImage.alt = list[1].alt;
    curImage.title = list[1].alt;
    var arr = document.getElementsByClassName('carousel-item');
    for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove('active');
    }
    el.classList.add('active');
}

