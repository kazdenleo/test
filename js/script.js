import { peoples } from '../js/peoples.js';
import { AddPeople } from "../js/AddPeople.js";
import { Popup } from "../Popup.js";

//Вывод имен, которые уже есть в базе
peoples.forEach((people) => {
	const newCard = (new AddPeople(people)).generate();
	document.querySelector('.age').append(newCard);
});

//активация кнопки "Добавить"
const form = document.querySelector('.form');
const cards = document.querySelectorAll('.people');

		
cards.forEach(card => {
	const button = card.querySelector('.people__button');
	button.addEventListener('click', () => {
		const peopleId = card.querySelector('.people__id').textContent;
		const newPopup = (new Popup(form, peopleId)).open();
	})
})