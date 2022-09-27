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

// scrollBtn.addEventListener('click', () => {
//     document.documentElement.scrollTop = 0;
//     document.body.scrollTop = 0;
// }

// )
