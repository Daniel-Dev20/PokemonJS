'use strict'
var pokemon;

//funcion que le añadimos al button para sacar su valor
var getName = function(){
    
    console.log(name);
}

//Conseguimos el valor del button que viene del input
let button = document.getElementById('buscar');

// conseguimos los atributos de la etiqueta html para poder mostrar las informacion
var div_poke = document.querySelector('.pokemon');
let poke_img = document.querySelector('#img-pokemon');
let poke_name = document.getElementById('nombre-pokemon');
let poke_peso = document.getElementById('peso');
let poke_experiencia = document.getElementById('experiencia');
let poke_habilidad  = document.getElementById('habilidad');
let poke_movimientos  = document.getElementById('movimientos');

//Evento del boton al dar click y ejecutamos la peticion fetch para consumir la api
document.querySelector('.loading').style.display= 'none';
    button.addEventListener('click', () => {
        let name = document.getElementById('name').value;
        //Consumir la API
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => data.json())
        .then(poke =>{
            pokemon = poke;
           
      
            //Conseguimos los valores de la api de los personajes
            poke_name.innerHTML = pokemon.name;
            poke_img.setAttribute('src', pokemon.sprites.front_default);
            poke_peso.innerHTML = "Peso:"+ " "+ pokemon.weight;
            poke_experiencia.innerHTML = "Experiencia Base:"+" "+ pokemon.base_experience;
            poke_habilidad.innerHTML = "Habilidad:"+" "+ pokemon.abilities[0].ability.name;
            poke_movimientos.innerHTML = "Movimientos:"+" "+ pokemon.moves[0].move.name;
            

        //  Mostramos la informacion del pokemon en la pagaina
        div_poke.appendChild(poke_img);
        div_poke.appendChild(poke_name);
        div_poke.appendChild(poke_movimientos);
        div_poke.appendChild(poke_experiencia);
        div_poke.appendChild(poke_habilidad);
        div_poke.appendChild(poke_peso);
})
 .catch(error => {
    alert("Error en la peticion");
 });
})

    

