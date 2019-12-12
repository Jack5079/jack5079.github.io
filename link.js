/* global location */
function onclick (e) {
  if (!this.href.startsWith('#')) {
    e.preventDefault()
    const frame = document.createElement('iframe')
    frame.src = this.href
    document.body.appendChild(frame)
    frame.onload = _ => {
      frame.style.display = 'block'
      frame.animate([
        // keyframes
        { top: '100%', opacity: 0 },
        { top: 0, opacity: 1 }
      ], {
        // timing options
        duration: 1000,
        easing: 'ease-out',
        iterations: 1
      }).onfinish = _ => { location.href = this.getAttribute('href') }
    }
    frame.style.display = 'none'
    frame.style.border = '0'
    frame.style.background = 'white'
    frame.style.width = '100vw'
    frame.style.height = '100vh'
    frame.style.position = 'fixed'
    frame.style.top = '0'
    frame.style.left = '0'
    document.querySelectorAll('*').forEach(e => { e.style.pointerEvents = 'none' })
  }
}

document.querySelectorAll('a').forEach(e => e.addEventListener('click', onclick))
