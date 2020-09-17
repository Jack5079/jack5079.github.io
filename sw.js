
async function patch(event) {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method != 'GET') return

  const fe = await fetch(event.request)
  if (fe.status === 404) {
    const text = await fe.text()
    if (text.includes('Page not found &middot; GitHub Pages') || text.startsWith('Cannot GET')) {
      event.respondWith(fetch('/404.html'))
    } else {
      return
    }
  } else {
    return
  }
}
self.addEventListener('fetch', patch)
