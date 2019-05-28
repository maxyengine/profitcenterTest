export default (url, timeout = 5000) => {

  return new Promise((resolve, reject) => {
    const img = new Image()
    const start = Date.now()
    const sym = url.includes('?') ? '&' : '?'

    img.onload = img.onerror = () => {
      resolve(Date.now() - start)
    }

    img.src = `${url}${sym}no-cache-key=${Math.random()}`

    setTimeout(() => reject('timeout'), timeout)
  })
}
