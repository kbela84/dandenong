const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarNav')
navLinks.forEach((l) => {
    l.addEventListener('click', () => { menuToggle.classList.remove('show'); })
})

export default function testFn () {
    console.log('lol')
}


