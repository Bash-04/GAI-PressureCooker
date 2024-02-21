function download() {
    let url = './public/external/svgexport-58.svg'
    const link = document.createElement('a')
    link.href = url
    link.download = 'image.svg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
