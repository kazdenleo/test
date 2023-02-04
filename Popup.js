import { peoples } from '../js/peoples.js';
import { AddPeople } from "../js/AddPeople.js";
export class Popup{
    constructor(selector, peopleId) {
        this._selector = selector,
        this._peopleId = peopleId;
    }

    open() {
        this._selector.classList.add('form_active');
        this.setEventListeners();
	}

	close() {
        this._selector.reset();
        this._selector.classList.remove('form_active');
    }

    _handleEscClose() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.close();
            }
        });
    }

    setEventListeners() {
        /*const exit = this._selector.querySelector('.people__exit');
		exit.addEventListener('click', () => {
            this.close();
		});*/ 
        /*const formButton = this._selector.querySelector('.form__button');
        formButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(event.target)
            this.close();
        });*/



        /*formButton.addEventListener('click', (event) => {
            console.log(this._peopleId);   
            event.preventDefault();
            const newAdd = this._findPeopleInfo();
            console.log(newAdd);
            const peppe = (new AddPeople(newAdd)).addNewPeople();
            this.close();
        });*/
    }

    _findPeopleInfo() {
        const formName = this._selector.querySelector('.form__name').value;
        const formMarried = this._selector.querySelector('input[type=radio][name=married]:checked').value;
        const b = peoples.flatMap(({ id }) => id);
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let newId = getRndInteger(1, 10);
        do {
            newId = getRndInteger(1, 10);
        } while (b.includes(newId));
        return {
            id: newId,
            name: formName,
            married: formMarried,
            partner: this._peopleId
        };
    }
        
            

        /*document.addEventListener( 'click', (e) => {
            const whereClick = e.composedPath().includes(this._selector);
            if (whereClick) {
                this.close();	
            }
        });*/
}