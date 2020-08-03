function carouselSelect(target) {
    const carousel = target.parentElement.parentElement;
    const items = carousel.querySelector('section.items');
    let index = 0;
    let child = target;
    while((child = child.previousSibling) != null) if (child.tagName) index++;
    
    for (let i = 0; i < items.children.length; i++) {
        items.children[i].style.visibility = i == index ? 'visible' : 'hidden';
    }
}