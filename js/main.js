function changeActiveItem(links, link) {
    links.forEach((l) => { l.classList.remove('active') })
    link.classList.add('active')
}

function changeActiveNavbarItemOnClick() {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
        link.addEventListener("click", function () {
            changeActiveItem(links, link);
        })
    })
}

function changeActiveNavbarItemOnScroll() {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    function activeSection() {
        let len = sections.length;
        while (--len && window.scrollY < sections[len].offsetTop);
        if (len != sections.length - 1) {
            changeActiveItem(links, links[len]);
        }
    }
    activeSection();
    window.addEventListener("scroll", activeSection);
}
function changeProgressBarOnScroll() {
    const progressBars = document.querySelectorAll(".progress-bar");
    const currentSkills = document.getElementById("current-skills");
    function showProgress() {
        progressBars.forEach((pB) => {
            const value = pB.dataset.progress;
            const skill = pB.classList[0];
            pB.style.cssText = "  width: " + value + '%' + ";  animation:" + skill + " 3s;";
        })
    }
    function hideProgress() {
        progressBars.forEach((pB) => {
            const skill = pB.classList[0];
            const value = pB.dataset.progress;

            pB.style.cssText = " width: " + value + '%' + "; animation:" + skill + "Out 3s;";
        })
    }

    window.addEventListener("scroll", (e) => {
        const currentSkillsPosition = currentSkills.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        console.log(screenPosition)
        console.log(currentSkillsPosition)
        if (currentSkillsPosition < screenPosition && -currentSkillsPosition < screenPosition) {
            showProgress();
        }
        else {
            hideProgress();
        }
    })
}




/************************* CALL THE FUNCTION*************************/
changeProgressBarOnScroll();

changeActiveNavbarItemOnClick();

changeActiveNavbarItemOnScroll();
