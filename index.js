document.addEventListener('DOMContentLoaded', () => {

    const scroller = new Scroller('#root');

    document.addEventListener('mousewheel', (event) => scroller.listenScroll(event));

});