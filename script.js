const majors = [
    {
        name: 'Mechanical Engineering',
        li1: "Roughly 900 students enrolled.",
        li2: "Average starting salary of $72,100.",
        li3: "$6.5 million in research expenditures.",
        li4: "96% of undergraduates secured jobs or continuing education.",
        img: 'imgs/STIT-mechanical-engineering.jpg',
        link: 'https://www.stevens.edu/school-engineering-science/departments/mechanical-engineering'
    },
    {
        name: 'Computer Science',
        li1: "Roughly 800 students enrolled.",
        li2: "Average starting salary of $99,800.",
        li3: "Top 100 computer science program in the country.",
        li4: "95% of computer science graduates in 2023 had career outcomes.",
        img: 'imgs/STIT-computer-science.png',
        link: 'https://www.stevens.edu/school-engineering-science/departments/computer-science'
    },
    {
        name: 'Cyber Security',
        li1: "Average compensation of $90,750.",
        li2: "Average starting salary of $94,000",
        li3: "7th in the nation for cyber security.",
        li4: "95% employed with the first 3 months of graduation",
        img: 'imgs/STIT-cyber-security.png',
        link: 'https://www.stevens.edu/program/cybersecurity-bachelor-degree'
    }
]

function generateMajorCards() {
    const majorCardsContainer = document.getElementById('topMajors');

    majors.forEach((major) => {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-lg-6', 'col-xl-4', 'p-4');

        card.innerHTML = `
            <div class = "card p-c h-100" id = "card">
                <img src = "${major.img}" class = "card-img-top">
                <div class = "card-body text-center">
                    <h5 class="card-title"><span class="underline">${major.name}</span></h5>
                    <p class="card-text">
                        <li>${major.li1}</li>
                        <br>
                        <li>${major.li2}</li>
                        <br>
                        <li>${major.li3}</li>
                        <br>
                        <li>${major.li4}</li>
                    </p>
                    <a href="${major.link}" target="_blank" class="btn more-info-btn">More Information</a>
                </div>
            </div>
        `;
        majorCardsContainer.appendChild(card);
    })

    function refresh() {
        location.reload()
    }
}

window.onload = generateMajorCards();


//  Back to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// changes navbar background color on scroll

let nav = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 56) {
        nav.classList.add('navbar-scrolled');
    }else if (window.scrollY < 56) {
        nav.classList.remove('navbar-scrolled')
    }
})