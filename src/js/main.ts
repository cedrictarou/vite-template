import '../scss/main.scss'
import { funcHello } from './second'

funcHello('tokimasa')

const target = document.querySelector('html')! as HTMLElement

target.addEventListener('click', () => {
  target.classList.toggle('open')
})
