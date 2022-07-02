const getHobbies = async () => {
    const hobbies = await fetch('./hobbies.json')
    const results = await hobbies.json()
    createCheckBox(results)
}

const createCheckBox = (results) => {
    results.forEach(hobbie => {
        const formCheck = document.createElement('div')
        formCheck.setAttribute('class', 'form-check')

        const checkInput = document.createElement('input')
        checkInput.setAttribute('class', 'form-check-input')
        checkInput.setAttribute('type', 'checkbox')
        checkInput.setAttribute('name', 'hobbies')
        checkInput.setAttribute('value', hobbie.hobbie_name)
        checkInput.classList.add('input', "invalid")
        checkInput.addEventListener("change", validCheckbox)


        const checkBoxLabel = document.createElement('label')
        checkBoxLabel.setAttribute('class', 'form-check-label')
        checkBoxLabel.setAttribute('for', 'flexCheckHobbie')
        checkBoxLabel.innerText = hobbie.hobbie_name

        formCheck.append(checkInput, checkBoxLabel)
        document.querySelector('#imgAndHobbies').appendChild(formCheck)
    });

}

getHobbies()

