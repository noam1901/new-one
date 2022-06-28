const citySelect = document.querySelector("#city")

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
  const hobbies = await fetch('http://127.0.0.1:5500/hobbies.json')
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
    checkInput.setAttribute('id', 'flexCheckHobbie')

    const checkBoxLabel = document.createElement('label')
    checkBoxLabel.setAttribute('class', 'form-check-label')
    checkBoxLabel.setAttribute('for', 'flexCheckHobbie')
    checkBoxLabel.innerText = hobbie.hobbie_name

    formCheck.append(checkInput, checkBoxLabel)
    document.querySelector('#imgAndHobbies').appendChild(formCheck)
  });

}

getHobbies()