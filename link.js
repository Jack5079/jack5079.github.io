/* global location */
const style = document.createElement('style')
style.innerHTML = `
  iframe {
    display: none;
    position: fixed;
    border: 0;
    top: 0;
    left: 0;
    background: white;
    width: 100vw;
    height: 100vh;
  }
`
document.head.appendChild(style)
function onclick (e) {
  if (!this.href.startsWith('#')) {
    e.preventDefault()
    const frame = document.createElement('iframe')
    frame.src = this.href
    document.documentElement.appendChild(frame)
    frame.onload = _ => {
      frame.style.display = 'block'
      frame.animate(
        [
          // keyframes
          { top: '100%', opacity: 0 },
          { top: 0, opacity: 1 }
        ],
        {
          // timing options
          duration: 1000,
          easing: 'ease-out',
          iterations: 1
        }
      ).onfinish = _ => {
        location.href = this.getAttribute('href')
      }
      document.body.animate(
        [
          // keyframes
          ({ transform: 'translateY(0)', opacity: 1 },
          { transform: 'translateY(-100%)', opacity: 0 })
        ],
        {
          // timing options
          duration: 1000,
          easing: 'ease-out',
          iterations: 1
        }
      )
    }

    document.querySelectorAll('*').forEach(e => {
      e.style.pointerEvents = 'none'
    })
  }
}

document
  .querySelectorAll('a')
  .forEach(e => e.addEventListener('click', onclick))
