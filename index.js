document.addEventListener('DOMContentLoaded',() => {
    console.log('ready');

    const root = document.querySelector('#root');
    const section = document.querySelectorAll('section');
    
    document.addEventListener('mousewheel',function(event) {
        console.log(event.wheelDelta);
    })
})