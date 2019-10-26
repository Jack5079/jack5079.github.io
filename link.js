const links = document.querySelectorAll('a')
function onclick (e) {
  if (!this.getAttribute('href').startsWith('#')) {
    e.preventDefault()
    let frame = document.createElement('iframe')
    frame.src = this.href
    frame.style.border = '0'
    frame.style.width = '100vw'
    frame.style.height = '100vh'
    frame.style.position = 'fixed'
    frame.style.top = '0'
    frame.style.left = '0'
    document.body.appendChild(frame)
    document.body.style.overflow = 'hidden'
    frame.onload = function () {
      document.title = frame.contentDocument.title;
      frame.animate([
        // keyframes
        { left: '100%' },
        { left: '0' }
      ], {
        // timing options
        duration: 1000,
        easing: 'ease-out',
        iterations: 1
      });
    }
  }
}
links.forEach(e => e.addEventListener('click', onclick))