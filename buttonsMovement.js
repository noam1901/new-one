
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
}


