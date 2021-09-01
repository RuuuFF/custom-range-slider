const Slider = {
  range: document.getElementById('range'),

  scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  },

  labelManipulator(event) {
    const value = Number(event.target.value)
    const label = event.target.nextElementSibling

    const range_width = getComputedStyle(event.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = Number(range_width.substring(0, range_width.length - 2))
    const num_label_width = Number(label_width.substring(0, label_width.length - 2))

    const max = Number(event.target.max)
    const min = Number(event.target.min)

    const left = value * (num_width / max) - num_label_width / 2 + Slider.scale(value, min, max, 10, -10)

    label.style.left = `${left}px`
    label.innerHTML = value
  },

  start() {
    range.addEventListener('input', event => Slider.labelManipulator(event))
  }
}

Slider.start()

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers