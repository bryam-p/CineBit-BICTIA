const cartelera = [
    {
        tipo: "2D Premier",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/223933.jpg?version=1580857200000"
    },
    {
        tipo: "3D Premier",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/223917.jpg?version=1580868000000"
    },
    {
        tipo: "2D Premier",
        duracion: "180 min",
        horario: "10-12 am",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222915.jpg?version=1580868000000"
    },
    {
        tipo: "2D Premier",
        duracion: "190 min",
        horario: "14-16 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222945.jpg?version=1580868000000"
    },
    {
        tipo: "2D Premier",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222834.jpg?version=1580868000000"
    },
    {
        tipo: "2D Premier",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222275.jpg?version=1580868000000"
       
    }
]

const estrenos = [
    {
        tipo: "4D Premier",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/223452.jpg?version=1580868000000"
    },
    {
        tipo: "3D Premier",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/224382.jpg?version=1580868000000"
    },
    {
        tipo: "3D Premier",
        duracion: "180 min",
        horario: "20-22 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222915.jpg?version=1580868000000"
    },
    {
        tipo: "2D Premier",
        duracion: "160 min",
        horario: "18-20 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222945.jpg?version=1580868000000"
    },
    {
        tipo: "2D",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222834.jpg?version=1580868000000"
    },
    {
        tipo: "3D Premier",
        duracion: "210 min",
        horario: "12-14 pm",
        imagen: "https://cinemarkmedia.modyocdn.com/co/300x400/222275.jpg?version=1580868000000"
       
    }
]


var contenido = document.querySelector('#estrenos')
var contCartelera = document.querySelector('#cartelera')

estrenos.forEach(function (elemento) {
    console.log(elemento)
    contenido.innerHTML += `<div class="item"><img src=${elemento.imagen} alt="">
    <h3>Formato: ${elemento.tipo}</h3>
    <h3>Duración: ${elemento.duracion}</h3>
    <h3>Horario: ${elemento.horario}</h3>
    </div>`
})

cartelera.forEach(function (elemento) {
    console.log(elemento)
    contCartelera.innerHTML += `<div class="item"><img src=${elemento.imagen} alt="">
    <h3>Formato: ${elemento.tipo}</h3>
    <h3>Duración: ${elemento.duracion}</h3>
    <h3>Horario: ${elemento.horario}</h3>
    </div>`
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        900:{
            items:5
        }
    }
})