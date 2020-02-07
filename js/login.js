let cajaUsuario = document.querySelector('.caja-usuario')
let correo = document.querySelector('#txtCorreo')
let contrasena = document.querySelector('#contrasena')
let btnEnviar = document.querySelector('#btn-enviar')
let btnLoginMostrar = document.querySelector('#login').addEventListener('click', function () {
    cajaUsuario.style.display = 'flex'
})
let publicidad = document.querySelector('.publicidad')
let slider1 = document.querySelector('#slider1') 
let slider2 = document.querySelector('#slider2') 

let sobreMi = document.querySelector('.section-sobremi')
let btnSobremi = document.querySelector('#btn-sobremi').addEventListener('click', function(){
     sobreMi.style.display = 'flex'
     publicidad.style.display = 'none'
     slider1.style.display = 'none'
     slider2.style.display = 'none'
})

let inicio = document.querySelectorAll('.inicio')
Array.from(inicio)

for(let i=0; i<3; i++){
    console.log(inicio[i])
    inicio[i].addEventListener('click',retornar)
}

function retornar(){
    sobreMi.style.display = 'none'
    publicidad.style.display = 'flex'
    slider1.style.display = 'block'
    slider2.style.display = 'block'
}


//Validaciones
let form = document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault()

    if (esValido()) {
        setCorreo = localStorage.setItem('Correo', correo.value)
        setContrasena = localStorage.setItem('Contrasena', contrasena.value)

        getCorreo = localStorage.getItem('Correo')

        let caja = cajaUsuario.style.display = 'none'

        sesion = document.querySelector('#login').textContent = `${getCorreo}`
   }else{
        alert('Por favor rellena los campos o introduce un correo correcto')
   }
    //alert(`Bienvenido${correo.value}`)

})

function esValido() {
    if (correo.value === '' || correo.value === null || contrasena.value === '' || contrasena.value === null) {
        return false
    }
        return true
}