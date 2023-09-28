const readMore = (id, index) => {
    const element = document.getElementById(id)
    const btn = document.getElementById(`read-${index+1}`)
    if (element.style.height === '100%') {
        element.style.height = '90px'
        btn.textContent = 'Read More'
    } else {
        element.style.height = '100%'
        btn.textContent = 'Show Less'
    }
}
const button = document.querySelectorAll('.read-more')
button.forEach((item, index) => {
    item.addEventListener('click', () => {
        readMore(`ipsum-${index+1}`, index)
    })
})