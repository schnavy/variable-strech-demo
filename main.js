let MIN_TEXT_WIDTH = 400
let MAX_TEXT_WIDTH = 1600

const BASE_FONT_SIZE = 95

let verticalStretchBool = false
let verticalVariableStretchBool = true

let varTitle = document.querySelector('#variable-title')
let body = document.querySelector('body')

window.addEventListener('load', updateFontStretch)

window.addEventListener('resize', updateFontStretch)

let scrollPosition = document.scrollingElement.scrollTop

document.addEventListener('scroll', scrollStretchHandler)

function scrollStretchHandler() {
  if(verticalStretchBool){
    updateVerticalStretch()
  }else if(verticalVariableStretchBool){
    updateVerticalStretchVariable()
  }
}

function updateFontStretch () {
  let val = map_range(window.innerWidth, MIN_TEXT_WIDTH, MAX_TEXT_WIDTH, 1.5, 8)
  setFontStretch(val)
  let loopCount = 0
  if (varTitle.clientWidth && window.innerWidth) {
    while (varTitle.clientWidth > window.innerWidth - 20 && loopCount < 1000) {
      val -= 0.05
      varTitle.style.fontVariationSettings = '"wdth" ' + val
      loopCount++
    }
  }
}

function setFontStretch (val) {
  varTitle.style.fontVariationSettings = '"wdth" ' + val
}

function map_range (value, low1, high1, low2, high2) {
  let res = low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
  res = Math.max(res, low2)
  res = Math.min(res, high2)
  return res
}

function toggleVerticalStretch (elem) {
  if (elem.value == "verticalStretchBool") {
    verticalStretchBool = true
    verticalVariableStretchBool = false
  } else if(elem.value == "verticalVariableStretchBool") {
    verticalStretchBool = false
    verticalVariableStretchBool = true
  }else{
    verticalStretchBool = false
    verticalVariableStretchBool = false
  }
  scrollStretchHandler()
  updateVerticalStretch()
  updateVerticalStretchVariable()

}

function updateVerticalStretch () {
  if (verticalStretchBool) {
    scrollPosition = document.scrollingElement.scrollTop

    varTitle.style.transform = 'scaleY(' + (1 + scrollPosition / 1000) + ')'

    // varTitle.style.transform =
    // 'translateY(-' +
    // (0 + scrollPosition / 50) +
    // 'px) scaleY(' +
    // (1 + scrollPosition / 1000) +
    // ')'
  } else {
    varTitle.style.transform = 'translateY(-0px) scaleY(1)'
  }
}

function updateVerticalStretchVariable () {

  
  if (verticalVariableStretchBool) {
    scrollPosition = document.scrollingElement.scrollTop
  
    console.log(scrollPosition)
    let newVal = BASE_FONT_SIZE + scrollPosition / 10

    varTitle.style.fontSize = newVal + 'px'
    updateFontStretch()
  } else {
    varTitle.style.fontSize = BASE_FONT_SIZE + 'px'
    updateFontStretch()
  }
}
