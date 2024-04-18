const root = document.querySelector(':root');
const galleryPics = document.querySelectorAll('.galleryPics');
const galleryBigImages = document.querySelectorAll('.galleryBigImages');
const closeGallery = document.getElementById('closeGallery')
const galleryList = [...galleryPics];
const toggleLeft = document.getElementById('toggleLeft');
const toggleRight = document.getElementById('toggleRight');

let selectedPictureNumber;
let swappedImage;

function getCurrentImage () {
    let currentImage = 'galleryImage' + selectedPictureNumber;
    let selectedImage = document.getElementById(currentImage);
    return selectedImage;
}


function clearImageSelection() {
    galleryBigImages.forEach((l) => {
        l.classList.remove('showSelectedGalleryImage','swapLeftIn','swapLeftOut','swapRightIn','swapRightOut');
    });
}

function hideSwappedImage () {
    getCurrentImage().classList.remove('swapLeftIn','swapLeftOut','swapRightIn','swapRightOut')
}


function toggleArrowFixer() {
    if (selectedPictureNumber === 1) {
        root.style.setProperty('--leftToggler', 'none');
    } else {
        root.style.setProperty('--leftToggler', 'initial');
    }
    if (selectedPictureNumber === galleryList.length) {
        root.style.setProperty('--rightToggler', 'none');
    } else {
        root.style.setProperty('--rightToggler', 'initial');
    }
}


function setImageNumber () {
    let currentImageNumber = `"` + selectedPictureNumber + " / " + galleryList.length + `"`
    root.style.setProperty('--bigImageNumbers', currentImageNumber);
}

function imagePopper() {
    getCurrentImage().classList.add('showSelectedGalleryImage');
    toggleArrowFixer();
}


for (let i = 0; i < galleryList.length; i++) {
    galleryList[i].addEventListener('click', () => {
        let windowWidth = window.innerWidth;
        if (windowWidth > 1023) {
            root.style.setProperty('--galleryFrame', 'initial');
            root.style.setProperty('--bodyHeight', 'hidden');
            selectedPictureNumber = (i + 1);
            setImageNumber();
            imagePopper();
        }
    })
}


closeGallery.addEventListener('click', () => {
    root.style.setProperty('--galleryFrame', 'none');
    root.style.setProperty('--bodyHeight', 'unset');
    clearImageSelection();
})


toggleRight.addEventListener('click', () => {
    hideSwappedImage();
    swappedImage = getCurrentImage();
    swappedImage.classList.add('swapLeftOut');
    selectedPictureNumber = selectedPictureNumber + 1;
    hideSwappedImage();
    getCurrentImage().classList.add('swapLeftIn');
    imagePopper();
    setImageNumber();
})

toggleLeft.addEventListener('click', () => {
    hideSwappedImage();
    swappedImage = getCurrentImage();
    swappedImage.classList.add('swapRightOut');
    selectedPictureNumber = selectedPictureNumber - 1;
    hideSwappedImage();
    getCurrentImage().classList.add('swapRightIn')
    imagePopper();
    setImageNumber();
})


function cloeWithEscapeKey(event) {

    switch (event.keyCode) {
        case 27:

            root.style.setProperty('--galleryFrame', 'none');
            root.style.setProperty('--bodyHeight', 'unset');
            clearImageSelection();
            break;
    }
}

document.body.addEventListener('keydown', cloeWithEscapeKey);




let counter = 0;
let turnOnPictures = setInterval(function(){ 
    galleryList[counter].classList.add('loadSmallPictures')
    if (counter === galleryList.length-1)
    {
        clearInterval(turnOnPictures);
    }
    counter++; 
}, 100);
  
    

