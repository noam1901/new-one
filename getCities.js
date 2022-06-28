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
    citySelect.value = localStorage.getItem('city') || ""
    if (citySelect.value !== "") {
        citySelect.classList.remove("invalid")
        allValid()

    }
}
getCities()
