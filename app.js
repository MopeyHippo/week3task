const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");
let position = 0

const slides = [
  {
    pic: "frog-1.webp",
    alt: "Frog On Leaf",
  },
  {
    pic: "frog-2.webp",
    alt: "Polite Frog",
  },
  {
    pic: "frog-3.webp",
    alt: "Chonkey Frog",
  },
  {
    pic: "frog-4.webp",
    alt: "Polite Frog On Rock",
  },
  {
    pic: "frog-5.webp",
    alt: "Chonk Frog On Rock",
  },
];


function createThumbnails() {
  slides.forEach(function (slide, index) {
    const img = document.createElement("img");
    img.src = slide.pic;
    img.alt = slide.alt;
    img.tabIndex = "0";
    thumbContainer.appendChild(img);
    img.addEventListener("click", function () {
        position = index;
      UpdateDisplayedImage();
    });
    img.addEventListener("keypress", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        UpdateDisplayedImage();
      }
    });
  });
}

function UpdateDisplayedImage() {
   createBigPicture(slides[position])
}

function createBigPicture(image) {
  displayImage.innerHTML = "";
  const bigPic = document.createElement("img");

  bigPic.src = image.pic;
  bigPic.alt = image.alt;

  displayImage.appendChild(bigPic);
}

createThumbnails();
UpdateDisplayedImage();




const next = () => {
    if(position === slides.length - 1) {
        position = 0
        UpdateDisplayedImage();
        return
    }
    position = position + 1
    UpdateDisplayedImage();
    }
const prev = () => {
    if(position === 0) {
        position = slides.length - 1
        UpdateDisplayedImage();
        return
    }
    position = position - 1
    UpdateDisplayedImage()
    }

  