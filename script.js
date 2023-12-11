const contents = document.querySelectorAll('.content')
const ListItems = document.querySelectorAll('nav ul li')

ListItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    ListItems.forEach(item => item.classList.remove('active'))
}
