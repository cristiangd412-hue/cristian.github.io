console.log('Faver eterno oro')

const div = document.querySelector('#data')
const img = document.createElement('img')
img.src= 'faver.jpg'
img.width = 800


div.appendChild(img)
img.addEventListener('click', function() {
    window.location.href = 'https://www.leagueofgraphs.com/summoner/las/FaverLC-0000'
})

const contenedor = document.getElementById('contenedor');

const leyenda = document.createElement('p');
leyenda.textContent = 'Faver Eterno Oro';

contenedor.appendChild(leyenda);
