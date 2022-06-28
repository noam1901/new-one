const infoText = document.querySelector("#info")
const infoImg = document.querySelector("#final_img")

const showData = () => {
    infoImg.src = localStorage.getItem('avatarUrl')
    infoText.innerText =
        `
    Full Name: ${localStorage.getItem('fullname')}
    Email: ${localStorage.getItem('email')}
    Birth Date: ${localStorage.getItem('bDay')}
    Address: 
    ${localStorage.getItem('city')}, ${localStorage.getItem('street')}, ${localStorage.getItem('number')}
    Hobbies:
    ${localStorage.getItem('Hobbies')}
    `
}

showData()