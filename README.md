# HTML-Carousel
A simple pure HTML/CSS/JavaScript carousel for your website

<style>
    body {
    font-family: Arial, Helvetica, sans-serif;
}

section.carousel {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 30rem;
    margin: auto;
    padding: 0.5rem;
    background-color: gray;
}

section.carousel section.menu {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: gainsboro;
}

section.carousel section.menu::-webkit-scrollbar {
    background-color: gray;
    width: 1rem;
}

section.carousel section.menu::-webkit-scrollbar-thumb {
    background-color: gainsboro;
    border-left: solid 0.25rem gray;
    border-right: solid 0.25rem gray;
}

section.carousel section.carousel-menu-item {
    display: inline-block;
    width: 3rem;
    background-color: gray;
    padding: 0;
    border: solid 0.5rem gainsboro;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 250ms ease-out;
}

section.carousel section.carousel-menu-item:hover {
    background-color: antiquewhite;
}

section.carousel section.carousel-menu-item::after {
    content: '';
    display: block;
    margin-top: 100%;
}

section.carousel section.items {
    position: relative;
    display: inline-flex;
    flex-grow: 1;
    background-color: antiquewhite;
}

section.carousel section.carousel-item {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: antiquewhite;
}
</style>
<script>
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
</script>
<section class="carousel">
    <section class="menu">
        <section class="carousel-menu-item" onclick="carouselSelect(this)"></section>
        <section class="carousel-menu-item" onclick="carouselSelect(this)"></section>
        <section class="carousel-menu-item" onclick="carouselSelect(this)"></section>
        <section class="carousel-menu-item" onclick="carouselSelect(this)"></section>
        <section class="carousel-menu-item" onclick="carouselSelect(this)"></section>
    </section>
    <section class="items">
        <section class="carousel-item">
            <h1>Page 1</h1>
        </section>
        <section class="carousel-item">
            <h1>Page 2</h1>
        </section>
        <section class="carousel-item">
            <h1>Page 3</h1>
        </section>
        <section class="carousel-item">
            <h1>Page 4</h1>
        </section>
        <section class="carousel-item">
            <h1>Page 5</h1>
        </section>
    </section>
</section>