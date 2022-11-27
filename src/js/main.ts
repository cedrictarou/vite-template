import '../scss/main.scss'
import '../scss/tooltip.scss'
import '../scss/dropdown.scss'

import { Tooltip } from './tooltip'
import { Dropdown } from './dropdown'

const tooltip = new Tooltip(document.querySelector('.tooltip')!)
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown')!

dropdowns.forEach((dropdown): void => {
  const instance = new Dropdown(dropdown)
  instance.init()
})