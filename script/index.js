const panels = document.querySelectorAll('.panel')

panels.forEach(data =>{
    data.addEventListener('click',()=>{
       removeActiveClass()
       data.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach(data=>{
        data.classList.remove('active')
    })
}

function Suma(a, b) {
    return a + b
}

const SumaF = ()=>{
    return 4 + 5
}

console.log("Funcion tradicional", Suma(3, 5))
console.log("Funcion Flecha",SumaF())