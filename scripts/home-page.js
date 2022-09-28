//scroll button
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const rootElement = document.documentElement;

function scrollToTop() {
    // to the top
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth" //animation effect
    })
}

scrollToTopBtn.addEventListener('click', scrollToTop)





function handleScroll() {

    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

    if (rootElement.scrollTop / scrollTotal > 0.5) {
        scrollToTopBtn.style.display = 'block'
    } else {
        scrollToTopBtn.style.display = 'none'
    }
}
document.addEventListener("scroll", handleScroll)

//mouse decoration
const mouseDecoration = document.querySelector('.mouse-decoration');
document.addEventListener('mousemove', function (e) {
    let x = e.pageX;
    let y = e.pageY;
    // console.log('coordinate x is:' + x + 'coordinate y is:' + y);
    mouseDecoration.style.left = x - 50 + 'px';
    mouseDecoration.style.top = y - 40 + 'px';
})
