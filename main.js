let MIN_TEXT_WIDTH = 400
let MAX_TEXT_WIDTH = 1600

let varTitle = document.querySelector('#variable-title')

window.addEventListener('load', updateFontStrech)

window.addEventListener('resize', updateFontStrech)

function updateFontStrech () {
  let val = map_range(window.innerWidth, MIN_TEXT_WIDTH, MAX_TEXT_WIDTH, 1.5, 8)
  setFontStrech(val)

  if (varTitle.clientWidth && window.innerWidth) {
    while (varTitle.clientWidth > window.innerWidth) {
      console.log('Alarm')
      val -= 0.1
      varTitle.style.fontVariationSettings = '"wdth" ' + val
    }
  }
}

function setFontStrech (val) {
  varTitle.style.fontVariationSettings = '"wdth" ' + val
}

function map_range (value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
}
