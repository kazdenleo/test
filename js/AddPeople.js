import { peoples } from './peoples.js';
export class AddPeople {
    constructor(peoplesInfo) {
        this._name = peoplesInfo.name,
		this._married = peoplesInfo.married,
		this._id = peoplesInfo.id,
		this._partner = peoplesInfo.partner;
    }

	_getElement() {
		const cardElement = document
		.querySelector('#template')
		.content
		.querySelector('.people')
		.cloneNode(true);
	  return cardElement;
	}

	addNewPeople() {
		peoples.push({
			'id': this._id,
			'name': this._name,
			'married': this._married,
			'partner': this._partner
		});
		this.generate();
		document.querySelector('.age').append(this.generate());
	}

	generate() {
		this._element = this._getElement();
		this._element.querySelector('.people__name').textContent = this._name;
		this._element.querySelector('.people__married').textContent = this._married;
		this._element.querySelector('.people__id').textContent = this._id;
		this._element.querySelector('.people__partner').textContent = this._partner;
		return this._element;	
	}
}