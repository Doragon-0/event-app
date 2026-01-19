import { DataBase } from "../data/DataBase.js";
import { Event } from "../models/Event.js";
import { User } from "../models/User.js";
import { navigateTo } from "../router/router.js";
const message = document.getElementById("textMessage");
export function addEventDom() {
    const submit = document.querySelector(".add-event-form");
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("eventTitle");
        const description = document.getElementById("eventDescription");
        const date = document.getElementById("eventDate");
        const location = document.getElementById("eventPlace");
        const categorie = document.getElementById("eventCategorie");
        const placeNumber = document.getElementById("eventCapacity");
        const nbrePlace = Number(placeNumber.value);
        if (!title.value.trim() || !description.value.trim() || !date.value.trim() || !location.value.trim() || !categorie.value.trim() || !placeNumber.value.trim()) {
            message.classList.add("errorMessage");
            message.classList.remove("successMessage");
            message.style.display = "block";
            message.textContent = "Veuillez remplir tous les champs";
            floatBoxTemporarily();
            return;
        }
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
    const submit = document.querySelector(".add-user-form");
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("submit", (e) => {
        e.preventDefault();
        const firstName = document.getElementById("userFirstName");
        const lastName = document.getElementById("userLastName");
        const address = document.getElementById("userEmail");
        if (!firstName.value.trim() || !lastName.value.trim() || !address.value.trim()) {
            message.classList.add("errorMessage");
            message.classList.remove("successMessage");
            message.style.display = "block";
            message.textContent = "Veuillez remplir tous les champs";
            floatBoxTemporarily();
            return;
        }
        if (!verifierEmailSaintJean(address.value)) {
            message.classList.add("errorMessage");
            message.classList.remove("successMessage");
            message.style.display = "block";
            message.textContent = "Entrer votre adresse mail institutionnel";
            floatBoxTemporarily();
            return;
        }
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
function verifierEmailSaintJean(email) {
    const domaineAutorise = "@saintjeaningenieur.org";
    return email.endsWith(domaineAutorise);
}
export function addResgistration() {
    const submit = document.querySelector(".event-register-form");
    submit.addEventListener("submit", (e) => {
        e.preventDefault();
        const eventId = document.getElementById("eventId");
        const userAddress = document.getElementById("participantAddress");
        if (!eventId.value.trim() || !userAddress.value.trim()) {
            message.classList.add("errorMessage");
            message.classList.remove("successMessage");
            message.style.display = "block";
            message.textContent = "Veuillez remplir tous les champs";
            floatBoxTemporarily();
            return;
        }
        try {
            message.textContent = DataBase.registrations.addRegistration(eventId.value, userAddress.value);
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
export function connectAdmin() {
    const formAdmin = document.getElementById("form-admin");
    formAdmin.addEventListener("submit", (e) => {
        e.preventDefault();
        const address = document.getElementById('email');
        const mdp = document.getElementById('password');
        if (address.value === "Admin" && mdp.value == "Admin") {
            navigateTo("/add-event");
        }
        else {
            message.classList.add("errorMessage");
            message.classList.remove("successMessage");
            message.style.display = "block";
            message.textContent = "Cet admin n'existe pas";
            floatBoxTemporarily();
        }
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
	            <p><strong>Nombre de places disponibles:</strong> ${e.maxSize - e.registeredNumber} </p>
				<p><strong>Catégorie :</strong> ${e.categorie}</p>
				<p class="event-statut"><strong>Statut :</strong> <span>${e.statut}</span></p>
	        </div>

		`;
        listeEvenement.appendChild(eventItem);
        const stateZone = document.querySelector(".event-details .event-statut");
    }
    const searchInput = document.getElementById("search-container");
    searchInput.addEventListener("input", (e) => {
        const valeur = searchInput.value.toLowerCase();
        listeEvenement.innerHTML = "";
        for (const e of DataBase.events.eventList) {
            if (e.categorie.toLowerCase().includes(valeur)) {
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
			            <p><strong>Nombre de places disponibles:</strong> ${e.maxSize - e.registeredNumber} </p>
						<p><strong>Catégorie :</strong> ${e.categorie}</p>
						<p id="event-statut"><strong>Statut :</strong> ${e.statut}</p>
			        </div>

				`;
                listeEvenement.appendChild(eventItem);
            }
        }
    });
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
