const main = document.getElementById('main')
const peliculas = [
    {
        'titulo': 'Minions',
        'imagen': '01.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 3.4
        },{
        'titulo': 'Jurassic World',
        'imagen': '02.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 5.2
        },{
        'titulo': 'Lightyear',
        'imagen': '03.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 1.8
        },{
        'titulo': 'Top Gun',
        'imagen': '04.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 8.6
        },{
        'titulo': 'Doctor Strange',
        'imagen': '05.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 7.3
        },{
        'titulo': 'El Teléfono Negro',
        'imagen': '06.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 6.4
        },{
        'titulo': 'Thor',
        'imagen': '07.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 6.6
        },{
        'titulo': 'La Princesa',
        'imagen': '08.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 4.4
        },{
        'titulo': 'Sonic',
        'imagen': '09.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 9.6
        },{
        'titulo': 'Los Secretos de Dumbledrore',
        'imagen': '10.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 5.5
        },{
        'titulo': 'Spiderman',
        'imagen': '11.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 3.6
        },{
        'titulo': 'El Perro',
        'imagen': '12.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 7.6
        },{
        'titulo': 'La Ciudad Perdida',
        'imagen': '13.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 3.8
        },{
        'titulo': 'Memoria',
        'imagen': '14.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 5.4
        },{
        'titulo': 'Morbius',
        'imagen': '15.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 3.7
        },{
        'titulo': 'Silla Caliente',
        'imagen': '16.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 7.8
        },{
        'titulo': 'Colisión',
        'imagen': '17.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 4.5
        },{
        'titulo': 'Su Amiga la Rata',
        'imagen': '18.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 2.8
        },{
        'titulo': 'Buscando un amigo',
        'imagen': '19.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 8.7
        },{
        'titulo': 'El Gallo Claudio',
        'imagen': '20.jpg',
        'resumen': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'puntaje': 8.9
        }
];

mostrarPeliculas();

function mostrarPeliculas() {
    main.innerHTML = '';
    peliculas.forEach((pelicula) => {
        const {titulo, imagen, resumen, puntaje} = pelicula;
        const peliculaEl = document.createElement('div')
        peliculaEl.classList.add('pelicula')
        peliculaEl.innerHTML = `
        <img src="imagenes/${imagen}" alt="${titulo}">
        <div class="pelicula-info">
            <h3>${titulo}</h3>
            <span>Puntos:<br>${puntaje}</span>
        </div>
        <div class="resumen">
            <h3>Resumen</h3>
            ${resumen}
        </div>
        `;
        main.appendChild(peliculaEl);
    });
}