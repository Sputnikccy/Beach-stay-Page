//form info validation
// window.onload = function () {
// }

const userName = document.getElementById('name');
const userEmail = document.getElementById('email-address');
const userMsg = document.getElementById('user-commentary');
const userSubmit = document.getElementById('user-submit');
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRe = /^[a-zA-Z0-9]+$/;
const formElement = document.querySelector("form");

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(userName.value)
    if (!userName.value.match(nameRe)) {
        alert('May I have your name?')
    }
    console.log(userEmail.value)
    if (!userEmail.value.match(re)) {
        alert('Please enter valid eamil address')
    };

    console.log(userMsg.value)
    if (userMsg.value == '') {
        alert('Please enter your message below')
    };

    if (userEmail.value.match(re) && userName.value.match(nameRe) && userMsg.value !== '') {
        alert('Submission Successful!');
        userName.value = '';
        userEmail.value = '';
        userMsg.value = '';
    }

})

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