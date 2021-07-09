// Array Of Images
let imgs = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg", "assets/images/6.jpg"]
let count = 0

let result = document.querySelector('span')

result.textContent = `${count+1} of ${imgs.length}`
    // img set attribute src
function setImgSrc(ele, imgs) {
    ele.setAttribute('src', imgs)
}

// Creation img element
function createImg(imgs) {
    let slider = document.querySelector('.slide')
    let control = document.querySelector('.slide-control')

    let img = document.createElement('img')
    setImgSrc(img, imgs)
        // img.setAttribute('src', imgs)
    img.setAttribute('class', 'slide-img')
    slider.insertBefore(img, control)
}


// call function of creation element
createImg(imgs[0])

// select img element
let img = document.querySelector('img')

// select icons controls
let right = document.querySelector('.right')
let left = document.querySelector('.left')





// slider control right side
right.addEventListener('click', function() {
    count++

    let li = [...document.querySelectorAll('li')]
    for (let i = 0, len = li.length; i < len; i++) {
        if (count == imgs.length) {
            count = 0
        }
        if (li[i].textContent == count + 1) {
            li[i].setAttribute('class', 'active')
        } else {
            li[i].classList.remove('active')
        }

    }

    if (count == imgs.length) {
        count = 0
    }
    result.textContent = `${count + 1} of ${imgs.length}`
    setImgSrc(img, imgs[count])
})

// slider control left side
left.addEventListener('click', function() {
    count--
    let li = [...document.querySelectorAll('li')]
    for (let i = 0, len = li.length; i < len; i++) {
        if (count < 0) {
            count = imgs.length - 1
        }

        if (li[i].textContent == count + 1) {
            li[i].setAttribute('class', 'active')
        } else {
            li[i].classList.remove('active')
        }

    }

    if (count < 0) {
        count = imgs.length - 1
    }
    result.textContent = `${count+1} of ${imgs.length}`
    setImgSrc(img, imgs[count])
})