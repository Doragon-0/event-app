import { DataBase } from "../data/DataBase.js";
import { Event } from "../models/Event.js";
import { User } from "../models/User.js";
const message = document.getElementById("textMessage");
export function addEventDom() {
    const button = document.getElementById("submit-event-btn");
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const title = document.getElementById("eventTitle");
        const description = document.getElementById("eventDescription");
        const date = document.getElementById("eventDate");
        const location = document.getElementById("eventPlace");
        const categorie = document.getElementById("eventCategorie");
        const placeNumber = document.getElementById("eventCapacity");
        const nbrePlace = Number(placeNumber);
        try {
            let event = new Event(title.value, description.value, new Date(date.value), location.value, categorie.value, nbrePlace);
            message.textContent = DataBase.events.ajouterEvenement(event);
            message.classList.remove("errorMessage");
            message.classList.add("successMessage");
            message.style.display = "block";
        }
        catch (error) {
            message.classList.add("errorMessage");
            message.classList.remove("successMessage");
            message.style.display = "block";
            message.textContent = error.message;
        }
        floatBoxTemporarily();
    });
}
export function addUserDom() {
    const button = document.getElementById("user-submit-btn");
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const firstName = document.getElementById("userFirstName");
        const lastName = document.getElementById("userLastName");
        const address = document.getElementById("userEmail");
        try {
            let user = new User(firstName.value, lastName.value, address.value);
            message.textContent = DataBase.users.addUser(user);
            message.classList.remove("errorMessage");
            message.classList.add("successMessage");
            message.style.display = "block";
        }
        catch (error) {
            message.classList.add("errorMessage");
            message.classList.remove("successMessage");
            message.style.display = "block";
            message.textContent = error.message;
        }
        floatBoxTemporarily();
    });
}
export function homePageDom() {
    const listeEvenement = document.getElementById("events-container");
    listeEvenement.innerHTML = "";
    for (const e of DataBase.events.eventList) {
        const eventItem = document.createElement("details");
        eventItem.className = "event-card";
        eventItem.innerHTML = `

			<summary class="event-summary">
	            <span class="event-id">${e.eventId}</span>
	            <span class="event-name">${e.title}</span>
	            <span class="event-date">${e.date}</span>
	        </summary>

	        <div class="event-details">
	            <p><strong>Description :</strong> ${e.description}</p>
	            <p><strong>Lieu :</strong> ${e.location}</p>
	            <p><strong>Nombre de places :</strong> ${e.maxSize}</p>
	        </div>

		`;
        listeEvenement.appendChild(eventItem);
    }
}
export function floatBoxTemporarily() {
    const box = document.getElementById("floatting-box");
    message.style.display = "block";
    message.style.bottom = "5%";
    setTimeout(() => {
        message.style.bottom = "-15%";
    }, 3000);
}
;
