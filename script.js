




(function () {
    var words = [
        "Accelerate Your Future. " + " Boost Your Skills",
        "Learn And Work On Live Project " + " From Clients Across The Globe",
        "Get 100% Job Assistance " + " & Attain Your Dream Career",
        "Grooming The Next " + " Generation Of Tech " + " Experts",
        "Be Future Proof " + " Learn High-In-Demand " + "Tech Skills"
    ],
        i = 1;
    setInterval(function () {
        var elem = document.getElementById("words");
        elem.style.opacity = 1;
        setTimeout(function () {
            elem.innerHTML = words[(i = (i + 1) % words.length)];
            elem.style.opacity = 1;
        });
    }, 7000);
})();


let bannerImage = document.getElementById("bannerImage");
let images = ["./images/happy-young-african-man-using-laptop-computer.png",
             "./images/portrait-young-african-woman-with-laptop-white.png",
             "./images/portrait-happy-young-woman-removebg.png",
             "./images/surprised-african-woman-covering-her-mouth-by-hand-while-looking-smartphone-screen-Photoroom.png",
              "./images/portrait-excited-young-african-couple.png"]

setInterval(function () {
    let random = Math.floor(Math.random() * 5);
    bannerImage.src = images [random];
}, 7000)

// .../ For instructors and mentors non stop scrolls
let scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}
function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true)
    })
}

// ..../ Counter for the about page....//
const counterAbout = document.querySelectorAll(".counterAbout");
counterAbout.forEach(counterAbout => {
    let initial__Count = 0;
    const final__Count = counterAbout.dataset.count;
    console.log(final__Count)

    const counting = setInterval(updateCounting, 1);

    function updateCounting() {

        if (initial__Count < 9000) {
            initial__Count += 5;
            counterAbout.innerText = initial__Count;
        }

        if (initial__Count <= 9500) {
            initial__Count += 1;
            counterAbout.innerText = initial__Count ** 1 + '+';
        }


        if (initial__Count >= final__Count) {
            clearInterval(counting);
        }
    }
});

// .../ Code for the home page counter //
const counters = document.querySelectorAll('.counting');
// Main function
for (let n of counters) {
    const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 5000; // change animation speed here
        const inc = target / speed;
        if (count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            n.innerText = target;
        }
    }
    updateCount();
};


// For the click slideInstructors..........
const slideInstructors = document.querySelector(".slideInstructors");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");

slideInstructors.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slideInstructors.scrollLeft += evt.deltaY;
    slideInstructors.style.scrollBehavior = "auto";

});

forward.addEventListener("click", () => {
    slideInstructors.style.scrollBehavior = "smooth";
    slideInstructors.scrollLeft += 400;
})

backward.addEventListener("click", () => {
    slideInstructors.style.scrollBehavior = "smooth";
    slideInstructors.scrollLeft -= 400;
})


// For the click slideTestimonials..........
const slideTestimonials = document.querySelector(".slideTestimonials");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

slideTestimonials.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slideTestimonials.scrollLeft += evt.deltaY;
    slideTestimonials.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", () => {
    slideTestimonials.style.scrollBehavior = "smooth";
    slideTestimonials.scrollLeft += 400;
})

backBtn.addEventListener("click", () => {
    slideTestimonials.style.scrollBehavior = "smooth";
    slideTestimonials.scrollLeft -= 400;
})
