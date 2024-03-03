// Study element selectors
const selectors = [
    '.content > [dir="rtl"]',      // Chumash, Tanya, Sefer Hamitzvos
    '.daily_study_body',           // Tehillim
    '.hayom-yom-hebrew',           // Hayom Yom
    '.content > .hebrew'           // Rambam 1 & 3
]

// Combine selectors into single string
const selector = selectors.join(', ')

// Find first study element
const studyElement = document.querySelector(selector)

// Apply fullscreen functionality if study element is present
if (studyElement) {
    // Add class for styling
    studyElement.classList.add('study-element')

    // Listen for click on studyElement to enter fullscreen
    studyElement.addEventListener('click', async () => {
        // Fullscreen request if not active
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
        }
    })

    // Store wake lock instance
    let wakeLock

    // Listen for changes in fullscreen mode
    document.addEventListener('fullscreenchange', async () => {
        // Enable wake lock to prevent screen from sleeping in fullscreen mode
        if (document.fullscreenElement) {
            wakeLock = await navigator.wakeLock.request('screen')
        }
        // Release wake lock upon exiting fullscreen
        else if (wakeLock) {
            await wakeLock.release()
        }
    })
}