// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


var template = document.querySelector("template")
var tabla = document.querySelector("tbody")


function getCliente(){
  return {
    nombre : document.querySelector("input#nombre").value,
    apellido : document.querySelector("input#apellido").value,
    sexo : document.querySelector("input#sexo").value,
    edad : document.querySelector("input#edad").value,
    peso : document.querySelector("input#peso").value,   
    actividad : document.querySelector("input#altura").value
  }
}

function addRow(cliente){
  let nuevaFila = plantilla.content.cloneNode(true)
  nuevaFila.querySelector(".nombre").textContent = cliente.nombre
  nuevaFila.querySelector(".epellido").textContent = cliente.apellido
  nuevaFila.querySelector(".sexo").textContent = cliente.sexo
  nuevaFila.querySelector(".edad").textContent = cliente.edad
  nuevaFila.querySelector(".peso").textContent = cliente.peso
  nuevaFila.querySelector(".altura").textContent = cliente.altura
  tabla.appendChild(nuevaFila)
}

document.querySelector("form").addEventListener("submit",
  (ev)=>{
    ev.preventDefault()
    addRow( getCliente() )
  }
)
