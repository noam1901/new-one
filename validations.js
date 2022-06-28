const citySelect = document.querySelector("#city")
const citySpan = document.querySelector("#city_span")
const imgPreview = document.querySelector('#imgPreview')
const imgUrl = document.querySelector('#avatarUrl')
const inputs = document.querySelectorAll(".input")
const nextButton = document.querySelector("#nextBtn")
const hobbiesArray = []


const allValid = () => {
    let valid = true
    for (let input of inputs) {
        if (input.classList.contains("invalid")) {
            valid = false
        }
        if (window.location.href.indexOf("phase3") > -1) {
            if (checkboxValid === false) {
                valid = false
            }
        }


    }
    if (valid) {
        nextButton.classList.remove("hidden")
    } else {
        nextButton.classList.add("hidden")
    }
}

const validCity = (e) => {
    if (e.value === "") {
        citySpan.classList.remove("city")
        citySelect.classList.add("invalid")
    } else {
        citySpan.classList.add("city")
        citySelect.classList.remove("invalid")

    }
    allValid()
}
const validStreet = (e) => {
    const streetRegEx = /^[A-Za-z]+\s?[./]?[A-Za-z]*$/g
    if (!streetRegEx.test(e.value)) {
        e.classList.add("invalid")
    } else {
        e.classList.remove("invalid")
    }
    allValid()
}
const validNumber = (e) => {
    if (Number(e.value) <= 0 || (Math.floor(Number(e.value)) !== Number(e.value)) || Number(e.value) === Infinity) {
        e.classList.add("invalid");
    } else {
        e.classList.remove("invalid")
    }
    allValid()
}

const validName = (e) => {
    const regexName = /^[A-z]{2,}( [A-z]{2,})+([A-z]|[ ]?)$/g
    if (!regexName.test(e.value)) {
        e.className += " invalid"
    } else {
        e.classList.remove("invalid")
    }
    allValid()
}

const validEmail = (e) => {
    const regexEmail = /^\S+@\S+\.\S+$/
    if (!regexEmail.test(e.value)) {
        e.className += " invalid"
    } else {
        e.classList.remove("invalid")

    }
    allValid()
}

const validDate = (e) => {
    if (e.value != "") {
        const date = e.value.split('-')
        const current = new Date()
        if (current.getFullYear() < date[0] || current.getFullYear() - date[0] < 18 || current.getFullYear() - date[0] == 18 && current.getMonth() < date[1] && current.getDay() < date[2]) {
            e.className += " invalid"
            return
        } else {
            e.classList.remove("invalid")
        }
        allValid()
    }
}
const validImage = (e) => {
    const regexImage = /(https?:\/\/.*\.(?:png|jpg))/i
    if (!regexImage.test(e.value)) {
        imgPreview.src = "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        imgUrl.classList.add("invalid")
    } else {
        imgPreview.src = e.value
        imgUrl.classList.remove("invalid")
    }
    allValid()
}

const agree = (e) => {
    if (e.checked) {
        e.classList.remove("invalid")
    } else {
        e.classList.add("invalid")
    }
    allValid()
}

const getCities = async () => {
    const response = await fetch("./cities.json")
    const data = await response.json()
    for (const city of data.cities) {
        const cityOption = document.createElement("option")
        cityOption.value = city
        cityOption.setAttribute("id", city)
        cityOption.innerText = city
        citySelect.append(cityOption)
    }
}
getCities()

const getHobbies = async () => {
    const hobbies = await fetch('./hobbies.json')
    const results = await hobbies.json()
    createCheckBox(results)
}

let checkboxValid = false
const validCheckbox = () => {
    let inputElements = document.querySelectorAll("[name='hobbies']");
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].type == "checkbox") {
            if (inputElements[i].checked) {
                checkboxValid = true
                if (hobbiesArray.indexOf(inputElements[i].value) == -1) {
                    hobbiesArray.push(inputElements[i].value)
                }
            }
        }
    }
    if (checkboxValid) {
        allValid()
        return
    }
    checkboxValid = false
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

