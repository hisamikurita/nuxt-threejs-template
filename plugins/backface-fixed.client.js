const body = document.querySelector('body')
let currentScrollTop = 0

const scrollStop = () => {
  currentScrollTop = window.pageYOffset
  body.style.position = 'fixed'
  body.style.top = `${currentScrollTop * -1}px`
  body.style.left = '0'
  body.style.width = '100%'
}

const scrollAuto = () => {
  body.style.position = ''
  body.style.top = ''
  body.style.left = ''
  body.style.width = ''
  window.scrollTo(0, currentScrollTop)
}

const backfaceScroll = (state) => {
  state ? scrollAuto() : scrollStop()
}

export default (context, inject) => {
  inject('backfaceScroll', backfaceScroll)
}
