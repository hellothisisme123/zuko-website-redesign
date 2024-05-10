const contentTimeframes = document.querySelectorAll(".container > .timeline > .content > .timeframe")
const contentDetails = document.querySelectorAll(".container > .timeline > .content > .timeframe > .detail")
const navigationBullets = document.querySelectorAll(".container > .timeline > .navigation > .timeframe > .bullet")
const navigationHeaders = document.querySelectorAll(".container > .timeline > .navigation > .timeframe > .header")

// contentTimeframes.forEach(child => {
//     const timeframes = [...child.classList].filter(x => x != "active" && x != "timeframe")[0]
//     console.log(timeframes);
// })

navigationHeaders.forEach(header => {
    header.addEventListener("click", (e) => {
        const timeframeIndex = Array.prototype.indexOf.call([...header.parentElement.parentElement.children], header.parentElement)
        setActiveTimeframe(timeframeIndex)
    })
})

contentDetails.forEach(child => {
    const details = child
    console.log(details);
})

navigationBullets.forEach(child => {
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
    contentTimeframes[timeframei].children[bulleti].animate({color: 'var(--orange)'},{duration: 400}) // makes the bullet highlight red
}