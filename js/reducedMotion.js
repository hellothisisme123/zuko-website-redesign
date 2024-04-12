const container = document.querySelector(".container")
let animations = localStorage.getItem("animations");
if (animations == null) {
    // thank you to for the code from the next line https://dev.to/natclark/checking-for-reduced-motion-preference-in-javascript-4lp9 
    const notReducedAnimations = !(window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true);
    localStorage.setItem("animations", `${notReducedAnimations}`)
    animations = localStorage.getItem("animations");
}
console.log(animations)

if (animations == "true") {
    container.classList.add("animationsOn")
} else if (animations == "false") {
    container.classList.remove("animationsOn")
}

const toggleAnimations = document.querySelector(".lowAnimationSelector .toggle .switch")
toggleAnimations.addEventListener("click", (e) => {
    container.classList.toggle("animationsOn");
    if (container.classList.contains("animationsOn")) {
        localStorage.setItem("animations", true)
    } else {
        localStorage.setItem("animations", false)
    }
    animations = localStorage.getItem("animations");
})