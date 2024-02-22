function download() {
    let url = './public/external/svgexport-58.svg'
    const link = document.createElement('a')
    link.href = url
    link.download = 'NotepadPro.exe'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
