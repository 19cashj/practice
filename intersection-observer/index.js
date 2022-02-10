const items = document.querySelectorAll('.item');
const itemContainer = document.querySelector('.container')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        //if (entry.isIntersecting) observer.unobserve(entry.target)
    })
    console.log(entries);
}, {
    //threshold: 0.5,
    //rootMargin: "100px",
})

const lastItemObserver = new IntersectionObserver(entries => {
    const lastItem = entries[0];
    if (!lastItem.isIntersecting) return
    loadNewItems();
    lastItemObserver.unobserve(lastItem.target);
    lastItemObserver.observe(document.querySelector(".item:last-child"))
}, {
    rootMargin: '100px'
})

lastItemObserver.observe(document.querySelector(".item:last-child"))

items.forEach(item => {
    observer.observe(item)
})

function loadNewItems() {
    for (let i=0; i<10; i++) {
        const item = document.createElement('div');
        item.textContent = "New Item";
        item.classList.add('item');
        observer.observe(item)
        itemContainer.append(item)
    }
}