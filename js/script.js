import { peoples } from '../js/peoples.js';
import { AddPeople } from "../js/AddPeople.js";
import { Popup } from "../Popup.js";

//Вывод имен, которые уже есть в базе
/*peoples.forEach((item) => {
	const newCard = (new AddPeople(item)).generate();
	document.querySelector('.age').append(newCard);
});*/

//активация кнопки "Добавить"
const form = document.querySelector('.form');
const cards = document.querySelectorAll('.people');
const formButtons = document.querySelectorAll('.form__button');

	const buttons = document.querySelectorAll('.people__button');
	console.log(buttons)
	buttons.forEach((button) => {
		console.log(button)
		button.addEventListener('click', () => {
			console.log(formButtons)
			formButtons.forEach((formButton) => {
				console.log(formButton)
				formButton.addEventListener('click', (event) => {
					event.preventDefault();
					console.log(event.target)
					form.reset();
				});
			})
		})
	})
		

/*cards.forEach(card => {
	const button = card.querySelector('.people__button');
	button.addEventListener('click', () => {
		const peopleId = card.querySelector('.people__id').textContent;
		const newPopup = (new Popup(form, peopleId)).open();
	})
})*/