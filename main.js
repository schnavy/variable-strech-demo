let MIN_TEXT_WIDTH = 400
let MAX_TEXT_WIDTH = 1600

let varTitle = document.querySelector('#variable-title')

window.addEventListener('load', updateFontStrech)

window.addEventListener('resize', updateFontStrech)

function updateFontStrech () {
  let val = map_range(window.innerWidth, MIN_TEXT_WIDTH, MAX_TEXT_WIDTH, 1.5, 8)
  setFontStrech(val)
  let loopCount = 0
  if (varTitle.clientWidth && window.innerWidth) {
    while (varTitle.clientWidth > window.innerWidth && loopCount < 100) {
      console.log('Alarm')
      val -= 0.1
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
  res = Math.min(res, low2)
  res = Math.max(res, high2)
  return res
}
