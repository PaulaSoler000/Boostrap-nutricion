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


var plantilla = document.querySelector("template")
var tabla = document.querySelector("tbody")

function getCliente(){
  return {
    nombre : document.querySelector("input#nombre").value,
    apellido : document.querySelector("input#apellidos").value,
    sexo : document.querySelector("select#sexo").value,
    edad : document.querySelector("input#edad").value,
    peso : document.querySelector("input#peso").value,  
    altura: document.querySelector("input#altura").value, 
    actividad : document.querySelector("select#actividad").value
  }
}

function addRow(cliente){
  let nuevaFila = plantilla.content.cloneNode(true)
  nuevaFila.querySelector(".nombre").textContent = cliente.nombre
  nuevaFila.querySelector(".apellido").textContent = cliente.apellido
  nuevaFila.querySelector(".sexo").textContent = cliente.sexo
  nuevaFila.querySelector(".edad").textContent = cliente.edad
  nuevaFila.querySelector(".peso").textContent = cliente.peso
  nuevaFila.querySelector(".altura").textContent = cliente.altura
  nuevaFila.querySelector(".actividad").textContent = cliente.actividad
//GET

var P = cliente.peso
var T = cliente.altura
var E = cliente.edad

if(cliente.sexo === "hombre"){  

 var GET = 66.473+(13.751*P)+(5.0033*T)-(6.755*E);

 //GER
  if(cliente.actividad === "sedentaria"){
    var GER = GET*1.3
  }else if(cliente.actividad === "muyLigera"){
    var GER = GET*1.35
  }else if(cliente.actividad === "ligera"){
    var GER = GET*1.6
  }else if(cliente.actividad === "moderada"){
    var GER = GET*1.7
  }else{
    var GER = GET*2.1
  }
}else{

  var GET = 655.0955+(9.463*P)+(1.8496*T)-(4.6756*E)

  //GER
  if(cliente.actividad === "sedentaria"){
    var GER = GET*1.3
  }else if(cliente.actividad === "muyLigera"){
    var GER = GET*1.33
  }else if(cliente.actividad === "ligera"){
    var GER = GET*1.5
  }else if(cliente.actividad === "moderada"){
    var GER = GET*1.6
  }else{
    var GER = GET*1.9
  }
 }
 nuevaFila.querySelector(".getKcal").textContent = Math.floor(GET)
 nuevaFila.querySelector(".gerKcal").textContent =  Math.floor(GER)

  tabla.appendChild(nuevaFila)
}

document.querySelector("form").addEventListener("submit",
  (ev)=>{
    ev.preventDefault()
    addRow( getCliente() )
  }
)




const cargarBtn = document.querySelector("#cargarBtn");

cargarBtn.addEventListener("click",cargarDatos)

function cargarDatos(){
  const url ="https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json"
fetch(url)
.then(response => response.json())
.then(data =>{ 

  const tabla= document.getElementById('tabla');
  const tbody = document.querySelector('tbody');
 

  data.forEach(item =>{

    let nuevaFila = plantilla.content.cloneNode(true)
    nuevaFila.querySelector(".nombre").textContent = item.nombre
    nuevaFila.querySelector(".apellido").textContent = item.apellidos
    nuevaFila.querySelector(".sexo").textContent = item.sexo
    nuevaFila.querySelector(".edad").textContent = item.edad
    nuevaFila.querySelector(".peso").textContent = item.peso
    nuevaFila.querySelector(".altura").textContent = item.altura
    nuevaFila.querySelector(".actividad").textContent = item.actividad

    //GET

    var P = item.peso
    var T = item.altura
    var E = item.edad

    if(item.sexo === "hombre"){  

    var GET = 66.473+(13.751*P)+(5.0033*T)-(6.755*E);

    //GER
      if(item.actividad === "sedentaria"){
        var GER = GET*1.3
      }else if(item.actividad === "muyLigera"){
        var GER = GET*1.35
      }else if(item.actividad === "ligera"){
        var GER = GET*1.6
      }else if(item.actividad === "moderada"){
        var GER = GET*1.7
      }else{
        var GER = GET*2.1
      }
    }else{

      var GET = 655.0955+(9.463*P)+(1.8496*T)-(4.6756*E)

      //GER
      if(item.actividad === "sedentaria"){
        var GER = GET*1.3
      }else if(item.actividad === "muyLigera"){
        var GER = GET*1.33
      }else if(item.actividad === "ligera"){
        var GER = GET*1.5
      }else if(item.actividad === "moderada"){
        var GER = GET*1.6
      }else{
        var GER = GET*1.9
      }
    }
    nuevaFila.querySelector(".getKcal").textContent = Math.floor(GET)
    nuevaFila.querySelector(".gerKcal").textContent = Math.floor(GER)
  
     tbody.appendChild(nuevaFila)

  });
});
}
