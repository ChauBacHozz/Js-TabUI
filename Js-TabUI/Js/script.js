var tabItems = document.querySelectorAll('.tab-item')
var tabPanes = document.querySelectorAll('.tab-pane')
let tabActive = document.querySelector('.tab-item.active')
let line = document.querySelector('.tabs .line')
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'


tabItems.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector('.tab-item.active').classList.remove('active')
        item.classList.add('active')
        document.querySelector('.tab-pane.active').classList.remove('active')
        tabPanes[index].classList.add('active')
        line.style.left = item.offsetLeft + 'px'
        line.style.width = item.offsetWidth + 'px'

    }
})