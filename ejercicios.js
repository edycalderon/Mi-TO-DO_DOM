
const btnTarea = document.querySelector('#btnTarea')
const creaTarea = document.querySelector('#creaTarea')
const tareaUno = document.querySelector('#uno')


const action = () => {
    const textUno = document.querySelector('#textUno')
    textUno.classList.toggle('text-decoration-line-through')
}



tareaUno.addEventListener('click', action)




let value = ''

creaTarea.addEventListener('change', (e) => {
    value = e.target.value
})

let contador = 0
//crea la tarea
const crearTareita = () => {
    if (value != "") {
        contador++

        const div = `
    <div id="padre-${contador}" class="card d-flex justify-content-between shadow-parrafo mt-4">
        <div class="d-flex justify-content-between">
            <div class="form-check">
                <input id="tarea-${contador}" class="form-check-input sombra-check "  type="checkbox" value="">
                <label class="form-check-label " for="defaultCheck1">
                <p id="parrafo-${contador}">${value}</p>
                </label>
            </div>
            <div">
                <button id="btnDelet-${contador}" class="btn btn-danger sombra"> eliminar  </button>
            </div>
    
        </div>

      
    </div>
    `

        const tareas = document.querySelector('#tareas')
        tareas.insertAdjacentHTML('afterbegin', div)

        const checkboxCreado = document.querySelector(`#tarea-${contador}`)
        const parrafoCreado = document.querySelector(`#parrafo-${contador}`)
        const eliminare = document.querySelector(`#padre-${contador}`)
        const botsi = document.querySelector(`#btnDelet-${contador}`)

        checkboxCreado.addEventListener('click', () => {
            parrafoCreado.classList.toggle('text-decoration-line-through')
        })

        botsi.addEventListener('click', () => {
            eliminare.remove(botsi)
            parrafoCreado.insertAdjacentElement(containerp)
        })


        creaTarea.value = ""
        value = ""
    }
    else {
        alert('escriba algo en el input')
    }
}


    //evento que escucha el click de crear tarea
    btnTarea.addEventListener('click', crearTareita)
