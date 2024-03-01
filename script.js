const studyElement = document.querySelector('.DailyStudy, .js-tanya-body, .daily_study_body, .hayom-yom-hebrew')
studyElement?.classList.add('custom-scroll')

const styleElement = document.createElement('style')
document.head.appendChild(styleElement)

studyElement?.addEventListener('click', () => {
    document.documentElement.requestFullscreen()

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

})

document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
        styleElement.innerHTML = ''
    }
})
