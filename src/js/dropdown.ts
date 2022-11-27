export class Dropdown {
  container: Element
  trigger: HTMLElement
  content: HTMLElement

  constructor(container: Element) {
    this.container = container
    this.trigger = container.querySelector('.trigger')!
    this.content = container.querySelector('.content')!
  }
  init(): void {
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active')
      this.content.classList.toggle('active')
    })
  }
}
