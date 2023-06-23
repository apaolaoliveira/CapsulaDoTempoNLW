const sliders = document.querySelectorAll(".slider")

sliders.forEach((slider) => {
  const slides = slider.querySelector(".slides")
  const prevBtn = slider.querySelector(".prev")
  const nextBtn = slider.querySelector(".next")
  const slideWidth = 590

  let slideIndex = 0
  let intervalId

  prevBtn.addEventListener("click", prevSlide)
  nextBtn.addEventListener("click", nextSlide)

  startSlider()

  function startSlider() {
    intervalId = setInterval(nextSlide, 4000)
  }

  function prevSlide() {
    clearInterval(intervalId)
    if (slideIndex === 0) {
      slideIndex = slides.childElementCount - 1
    } else {
      slideIndex--
    }
    updateSlidePosition()
  }

  function nextSlide() {
    clearInterval(intervalId) 
    if (slideIndex === slides.childElementCount - 1) {
      slideIndex = 0
    } else {
      slideIndex++
    }
    updateSlidePosition()
  }

  function updateSlidePosition() {
    const translateXValue = slideWidth * -slideIndex 
    slides.style.transform = `translateX(${translateXValue}px)`

    startSlider() 
  }
})