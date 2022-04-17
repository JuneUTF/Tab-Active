const TabList = document.querySelector('.tab-list')
const TabItem = document.querySelectorAll('.tab-item')
const TabContent = document.querySelectorAll('.tab-content');
TabList.addEventListener('click', (e) => {
    const TabId = e.target.dataset.tab;
    if (TabId != 'menu') {
        e.stopPropagation();
        TabItem.forEach((el) => {
            el.classList.remove('active')
        })
        e.target.classList.add('active')
        TabContent.forEach((el) => {
            el.classList.remove('active')
        })
        TabContent[TabId].classList.add('active')
    }
})