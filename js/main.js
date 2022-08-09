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
        const butoomSkillsPosition = currentSkills.getBoundingClientRect().bottom;

        if (currentSkillsPosition + 150 < screenPosition && butoomSkillsPosition >= 200) {
            showProgress();
        }
        else {
            hideProgress();
        }
    })
}


function fadeInOut() {
    const fadeSections = document.querySelectorAll(".fadeSection");
    window.addEventListener("scroll", () => {
        fadeSections.forEach(fadeSection => {
            const i_O = fadeSection.querySelectorAll(".fade_in_out");
            function fade_in(io) {
                io.style.cssText = "opacity: 1; transform: translateX(0);";
            }

            function fade_out(io) {
                const value = io.dataset.fade;
                io.style.cssText = "opacity: 0; transform: translateX(" + value + "%);";
            }
            const trigger = window.innerHeight / 6 * 4;
            i_O.forEach(io => {
                const top = io.getBoundingClientRect().top;
                const buttom = io.getBoundingClientRect().buttom;
                if (trigger + 100 > top) {
                    fade_in(io);
                } else {
                    fade_out(io);
                }
            });
        });
    });

}

/************************* CALL THE FUNCTIONS*************************/
changeProgressBarOnScroll();

changeActiveNavbarItemOnClick();

changeActiveNavbarItemOnScroll();

fadeInOut();

