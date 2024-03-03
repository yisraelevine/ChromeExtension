// Selectors for different study elements
const selectors = [
    '.content > [dir="rtl"]',      // Chumash, Tanya, Sefer Hamitzvos
    '.daily_study_body',           // Tehillim
    '.hayom-yom-hebrew',           // Hayom Yom
    '.content > .hebrew'           // Rambam 1 & 3
]

// Combine selectors into a single string
const selector = selectors.join(', ')

// Find the first matching study element
const studyElement = document.querySelector(selector)

// If a study element is found, apply fullscreen functionality
if (studyElement) {
    // Add class for styling
    studyElement.classList.add('study-element')

    // Add event listener to enter fullscreen mode on click
    studyElement.addEventListener('click', () => {
        document.documentElement.requestFullscreen()
    })
}