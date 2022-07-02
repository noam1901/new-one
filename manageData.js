const allInputs = document.querySelectorAll(".input")
const inputElements = document.querySelectorAll("[name='hobbies']")

const saveData = (num) => {
    for (let input of allInputs) {
        localStorage.setItem(`${input.id}`, `${input.value}`)
    }
    if (num === 4) {
        localStorage.setItem('Hobbies', `${hobbiesArray}`)

    }
    localStorage.setItem('lastPhase', num)
    localStorage.setItem('href', window.location.href)
}

const reloadData = (currentPage) => {
    for (let input of allInputs) {
        input.value = localStorage.getItem(`${input.id}`) || ""
        if (input.value !== "") {
            input.classList.remove("invalid")
            allValid()

        }
    }
    if (localStorage.getItem('lastPhase') === null || localStorage.getItem('lastPhase') === undefined) {
        window.location.replace('./agreement.html')
    } else if (currentPage > localStorage.getItem('lastPhase')) {
        window.location.replace(localStorage.getItem('href'))
    }

}

const printSubChoice = () => {
    const subChoice = document.querySelector('input[name="subChoice"]:checked').value
    const totalCostSpan = document.querySelector('#totalCost') 
    totalCostSpan.innerText = subChoice
}

printSubChoice()
