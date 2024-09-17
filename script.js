const majors = [
    {
        name: 'Mechanical Engineering',
        description: 'hello',
        img: 'imgs/STIT-mechanical-engineering.jpg'
    },
    {
        name: 'Computer Science',
        description: 'helloo',
        img: 'imgs/STIT-computer-science.png'
    },
    {
        name: 'Cyber Security',
        description: 'hellooo',
        img: 'imgs/STIT-cyber-security.png'
    }
]

function generateMajorCards() {

    console.log('fire')
    const majorCardsContainer = document.getElementById('topMajors');

    majors.forEach((major) => {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'p-4');

        card.innerHTML = `
            <div class = "card p-c h-100" id = "card">
                <div class = "card-header text-center">${major.name}</div>
                <div class = "card-body">
                    <div class = "text-center">
                        <img class = "major-img" src = "${major.img}">
                        <p class = "p-3">${major.description}</p>
                    </div>
                </div>
            </div>
        `;
        majorCardsContainer.appendChild(card);
    })

    function refresh() {
    location.reload()
 }}

 window.onload = generateMajorCards();