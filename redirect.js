/* global location */
const locationoflink = [...document.getElementsByTagName('a')].map(e => e.innerText).indexOf(location.hash.substring(1))
if (locationoflink !== -1) {
  [...document.getElementsByTagName('a')][locationoflink].click()
}
