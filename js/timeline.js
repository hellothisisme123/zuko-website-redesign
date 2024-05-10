const contentTimeframes = document.querySelectorAll(".container > .timeline > .content > .timeframe")
const contentDetails = document.querySelectorAll(".container > .timeline > .content > .timeframe > .detail")
const navigationBullets = document.querySelectorAll(".container > .timeline > .navigation > .timeframe > .bullet")

// contentTimeframes.forEach(child => {
//     const timeframes = [...child.classList].filter(x => x != "active" && x != "timeframe")[0]
//     console.log(timeframes);
// })

// contentDetails.forEach(child => {
//     const details = child
//     console.log(details);
// })

navigationBullets.forEach(child => {
//     console.log();
//     console.log(Array.prototype.indexOf.call([...child.parentElement.children], child))
//     console.log(child);
    child.addEventListener("click", (e) => {
        const timeframeIndex = Array.prototype.indexOf.call([...child.parentElement.parentElement.children], child.parentElement)
        const bulletIndex = Array.prototype.indexOf.call([...child.parentElement.children], child)
        setActiveBullet(bulletIndex, timeframeIndex)
    })
})

function setActiveTimeframe(i) {
    contentTimeframes.forEach(tf => {
        tf.classList.remove("active")
    })
    
    contentTimeframes[i].classList.add("active")
}

function setActiveBullet(bulleti, timeframei) {
    setActiveTimeframe(timeframei)

    navigationBullets[bulleti].animate({filter: 'drop-shadow(0 0 5px #000f) drop-shadow(-15px -15px 5px #0005)'},{duration: 1, fill: 'forwards'})
}