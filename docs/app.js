"use strict";

const imageDialog = document.querySelector(".image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogCaption = document.querySelector("#dialog-caption");
let previousFocus = null;

if (imageDialog && typeof imageDialog.showModal === "function") {
  document.querySelectorAll("[data-enlarge]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      if (!image) return;
      previousFocus = button;
      dialogImage.src = image.currentSrc || image.src;
      dialogImage.alt = image.alt;
      dialogCaption.textContent = image.alt;
      imageDialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });

  imageDialog.addEventListener("click", (event) => {
    const bounds = imageDialog.getBoundingClientRect();
    if (event.target === imageDialog &&
        (event.clientX < bounds.left || event.clientX > bounds.right ||
         event.clientY < bounds.top || event.clientY > bounds.bottom)) {
      imageDialog.close();
    }
  });

  imageDialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (previousFocus) previousFocus.focus();
  });
} else {
  document.querySelectorAll("[data-enlarge]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      if (image) window.open(image.src, "_blank", "noopener,noreferrer");
    });
  });
}

// Keep competing videos from playing over one another.
document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("play", () => {
    document.querySelectorAll("video").forEach((otherVideo) => {
      if (otherVideo !== video) otherVideo.pause();
    });
  });
});
