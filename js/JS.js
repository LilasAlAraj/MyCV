function changeActiveNavbarItem() {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
        link.addEventListener("click", function () {
            links.forEach((e) => { e.classList.remove('active') })
            link.classList.add('active')
        })
    })
}

changeActiveNavbarItem();