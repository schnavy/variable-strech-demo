let MIN_TEXT_WIDTH = 400
let MAX_TEXT_WIDTH = 1600

let verticalStrechBool = true

let varTitle = document.querySelector('#variable-title')
let body = document.querySelector('body')

window.addEventListener('load', updateFontStrech)

window.addEventListener('resize', updateFontStrech)

let scrollPosition = document.scrollingElement.scrollTop

document.addEventListener('scroll', updateVerticalStrech)


function updateFontStrech () {
  let val = map_range(window.innerWidth, MIN_TEXT_WIDTH, MAX_TEXT_WIDTH, 1.5, 8)
  setFontStrech(val)
  let loopCount = 0
  if (varTitle.clientWidth && window.innerWidth) {
    while (varTitle.clientWidth > window.innerWidth-20 && loopCount < 1000) {
      console.log('Alarm')
      val -= 0.05
      varTitle.style.fontVariationSettings = '"wdth" ' + val
      loopCount++
    }
  }
}

function setFontStrech (val) {
  varTitle.style.fontVariationSettings = '"wdth" ' + val
}

function map_range (value, low1, high1, low2, high2) {
  let res = low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
  res = Math.max(res, low2)
  res = Math.min(res, high2)
  console.log(res);
  return res
}

function toggleVerticalStrech (elem) {
  if (elem.checked) {
    verticalStrechBool = true
  } else {
    verticalStrechBool = false
  }
  updateVerticalStrech()
}


function updateVerticalStrech () {
  if (verticalStrechBool) {
    scrollPosition = document.scrollingElement.scrollTop

    varTitle.style.transform =
      'scaleY(' +
      (1 + scrollPosition / 1000) +
      ')'


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
