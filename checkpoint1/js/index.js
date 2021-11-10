window.onload = (event) => {
	let formulario = document.getElementById('formulario');
	let cancelar = document.getElementById('cancelar');
	let about = document.getElementById('about');
	let showErrors = document.getElementById('erros');

	about.addEventListener('click', () => {
		window.location.href = 'about.html';
	});

	cancelar.addEventListener('click', function (e) {
		showErrors.style.display = 'none';
	});

	formulario.addEventListener(
		'submit',
		function (e) {
			e.preventDefault();

			// Validando o conteúdo do form
			let nomeBanda = document.getElementById('titulo');
			let textBanda = document.getElementById('descricao');
			let imgBanda = document.getElementById('url');

			showErrors.style.display = 'none';

			let errors = [];

			if (nomeBanda.value.length <= 0) {
				errors.push('Preencha NOME DA BANDA!');
			}

			if (textBanda.value.length <= 0) {
				errors.push('Preencha DESCRIÇÃO DA BANDA!');
			}

			if (imgBanda.value.length <= 0) {
				errors.push('Preencha IMAGEM DA BANDA!');
			}

			linebreak = document.createElement('br');
			showErrors.innerHTML = '';

			if (errors.length > 0) {
				errors.map((item) => {
					showErrors.append(item);
					showErrors.appendChild(document.createElement('br'));
				});
				showErrors.style.display = 'block';
				return;
			}

			insertCard(nomeBanda.value, textBanda.value, imgBanda.value);

			nomeBanda.value = '';
			textBanda.value = '';
			imgBanda.value = '';
		},
		true
	);
};

function insertCard(banda, texto, imagem) {
	let localCard = document.getElementById('cards');

	let card = `       
    <div class="card">
    <h3 class="title">${banda}</h3>
    <p class="text">${texto}</p>
        <div class="circle">
        <img class="img-card" src="${imagem}" alt="${banda}">
        </div>
    </div>
`;
	localCard.innerHTML += card;

	VanillaTilt.init(document.querySelectorAll('.card'), {
		max: 25,
		speed: 400,
	});
}

$(document).ready(function () {
	$.fakeLoader({
		timeToHide: 1800,
		bgColor: '#7f0000',
		spinner: 'spinner4',
	});
});
