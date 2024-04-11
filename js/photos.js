const photos = document.querySelector(".photoGallery .photos")
const fanartFilter = document.querySelector(".photoGallery .filters .filter.fanart")
const screenshotFilter = document.querySelector(".photoGallery .filters .filter.screenshot")

fanartFilter.addEventListener("click", (e) => {
    photos.classList.toggle("fanart")
    fanartFilter.classList.toggle("active")
})

screenshotFilter.addEventListener("click", (e) => {
    photos.classList.toggle("screenshot")
    screenshotFilter.classList.toggle("active")
})

const photoImages = document.querySelectorAll(".photoGallery .photos img")
photoImages.forEach((photo, i) => {
    photo.style.setProperty("--index", i + 6)
    photo.addEventListener("click", (e) => {
        const photoSrc = photo.src;


    })
})