const majors = [
    {
        name: 'Mechanical Engineering',
        description: 'hello',
        img: 'imgs/STIT-mechanical-engineering.jpg',
        link: 'https://www.stevens.edu/program/mechanical-engineering-masters'
    },
    {
        name: 'Computer Science',
        description: 'helloo',
        img: 'imgs/STIT-computer-science.png',
        link: 'https://www.stevens.edu/program/computer-science-bachelor-degree'
    },
    {
        name: 'Cyber Security',
        description: 'hellooo',
        img: 'imgs/STIT-cyber-security.png',
        link: 'https://www.stevens.edu/program/cybersecurity-bachelor-degree'
    }
]

function generateMajorCards() {
    const majorCardsContainer = document.getElementById('topMajors');

    majors.forEach((major) => {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'p-4');

        card.innerHTML = `
            <div class = "card p-c h-100" id = "card">
                <img src = "${major.img}" class = "card-img-top">
                <div class = "card-body text-center">
                    <h5 class="card-title">${major.name}</h5>
                    <p class="card-text">${major.description}</p>
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

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


//  Back to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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