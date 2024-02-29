const studyElement = document.querySelector('.DailyStudy, .js-tanya-body, .daily_study_body, .hayom-yom-hebrew')
const SCROLLING_SPEED = studyElement ? Math.min(+prompt('Scrolling Speed'), 24) : NaN

if (SCROLLING_SPEED) {
    
    let scrollTop = 0
    let isScrolling = true
    // Adding styles
    studyElement.classList.add('custom-scroll')
    const styleElement = document.createElement('style')
    document.head.appendChild(styleElement)
    styleElement.innerHTML = `
    html { 
        scrollbar-gutter: auto !important;
    }
    body { 
        overflow: hidden;
    }
    .custom-scroll { 
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11;
        width: 100vw;
        overflow: auto;
        height: 100vh;
        background-color: white;
        padding: 20px ;
    }
    .custom-scroll * {
        font-size: 50px !important;
    }
    `

    // Functions
    const scrollIncrement = () => scrollTop += 1
    const scrollFunction = () => {
        if (isScrolling) studyElement.scrollTo(0, scrollTop)
    }

    // Intervals
    const refreshScreenInterval = setInterval(scrollFunction, 1000 / 24)
    const scrollInterval = setInterval(scrollIncrement, 1000 / SCROLLING_SPEED)

    // Allowing scrolling by user
    let scrollingTimeout
    studyElement.addEventListener('wheel', () => {
        clearTimeout(scrollingTimeout)
        isScrolling = false
        scrollingTimeout = setTimeout(() => {
            isScrolling = true
            scrollTop = studyElement.scrollTop
        }, 400)
    })

    // exiting on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setTimeout(() => window.history.back(), 100)
        }
    })
}
