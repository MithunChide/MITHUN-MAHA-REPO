
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox )

// checkBox()

function checkBox() {
   const triggerBottom = (window.innerHeight /5 * 4)

   boxes.forEach(box => {
    const boxTop =  box.getBoundingClientRect().top
    // console.log(boxTop);

    if (boxTop < triggerBottom) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')

    }
   })
}