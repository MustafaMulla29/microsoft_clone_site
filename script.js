const slides = document.querySelectorAll('.slide')
const circlePrev = document.getElementById('circlePrev')
const circleNext = document.getElementById('circleNext')

let counter = 0

circlePrev.style.backgroundColor = "black"

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++
        slideImage()
    }
    circlePrev.style.backgroundColor = 'white'
    circleNext.style.backgroundColor = 'black'

}
const goPrev = () => {
    if (counter != 0) {
        counter--
        slideImage()
    }
    circlePrev.style.backgroundColor = 'black'
    circleNext.style.backgroundColor = 'white'
}


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}



const navigation = document.getElementById('navigation')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')

if (window.outerHeight <= 1024) {
    hamburger.addEventListener('click', () => {
        navigation.style.display = 'block'
        hamburger.style.display = 'none'
        close.style.display = 'block'
    })

    close.addEventListener('click', () => {
        navigation.style.display = 'none'
        if (window.outerWidth <= '1024')
            hamburger.style.display = 'block'
        else {
            hamburger.style.display = 'none'
        }
        close.style.display = 'none'
    })
}
