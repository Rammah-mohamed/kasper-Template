//Scroll TO Section
let links = document.querySelectorAll(".header .links a");
scrollToSection(links);

//Button Top
let btnTop = document.querySelector(".btn-top");
window.addEventListener("scroll", e => {
    if (window.scrollY > 0) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
})
btnTop.onclick = () => {
    window.scrollTo(0, 0);
}

//Toggle Menu
document.querySelector(".header .toggle-menu").onclick = () => {
    document.querySelector(".header .links").classList.toggle("show");
};

//Change Background
let bullets = document.querySelectorAll(".landing .bullets li");
let backgroundArrows = document.querySelectorAll(".landing .background-change");
activeElement(bullets);
bullets.forEach(bullet => {
    bullet.addEventListener("click", e => {
        document.querySelector(".landing").style.backgroundImage = `url("Image/` + e.target.dataset.img + `")`;
    })
})
backgroundArrows.forEach(arrow => {
    arrow.addEventListener("click", e => {
        if (e.target.classList.contains("left")) {
            if (document.querySelector(".landing .bullets .active").previousElementSibling !== null) {
                document.querySelector(".landing .bullets .active").previousElementSibling.click();
            }
        } else {
            if (document.querySelector(".landing .bullets .active").nextElementSibling !== null) {
                document.querySelector(".landing .bullets .active").nextElementSibling.click();
            }
        }
    })
})

//Start Portfolio
//suffle
let shuffleLi = document.querySelectorAll(".portfolio .shuffle li");
let imgBoxs = document.querySelectorAll(".portfolio .imgs-container");
activeElement(shuffleLi);
shuffleLi.forEach(li => {
    li.addEventListener("click", e => {
        imgBoxs.forEach(box => {
            if (window.innerWidth > 1200) {
                box.style.opacity = "0.5";
            } else {
                box.style.display = "none";
            }
        })
        document.querySelectorAll(`.portfolio .box ${e.target.dataset.img}`).forEach(box => {
            if (window.innerWidth > 1200) {
                box.style.opacity = "1";
            } else {
                box.style.display = "block";
            }
        })
    })
})
//Extra Images
let more = document.querySelector(".portfolio .more"),
    extraImgBoxs = document.querySelectorAll(".portfolio .box .extra");
more.onclick = () => {
    extraImgBoxs.forEach(box => {
        box.classList.toggle("extra");
    })
    if (more.textContent === "more") {
        more.textContent = "less"
    } else {
        more.textContent = "more";
    }
}
//End Portfolio

//Start Stats Count
let stats = document.querySelectorAll(".stats .num"),
    statSection = document.querySelector(".stats"),
    started = false;
window.addEventListener("scroll", e => {
    if (window.scrollY >= statSection.offsetTop - 250) {
        if (!started) {
            stats.forEach(stat => startCount(stat));
        }
        started = true;
    }
})

// Progress Animation 
let skills = document.querySelector(".skills");
let progSpans = document.querySelectorAll(".prog span");

window.onscroll = function () {

    if (window.scrollY >= skills.offsetTop - 250) {
        progSpans.forEach((span) => {
            span.style.width = span.dataset.prog;
        })
    }
}
scroll
//Start Funtions
function scrollToSection(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
};

function activeElement(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", e => {
            elements.forEach(el => {
                el.classList.remove("active");
            })
            e.target.classList.add("active");
        })
    })
}

function startCount(el) {
    let goal = el.dataset.num,
        countInterval = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(countInterval);
            }
        }, 5000 / goal);
};