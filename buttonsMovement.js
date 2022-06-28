
const allInputs = document.querySelectorAll(".input")

const saveData =(num)=>{
    for(let input of allInputs){
        localStorage.setItem(`${input.id}`,`${input.value}`)
    }
    localStorage.setItem('lastPhase', num)
}



