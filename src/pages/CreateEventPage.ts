export function CreateEventPage(): string {
  return `
    <header class="add-event-header">
    <h1>➕ Ajouter un nouvel événement 🎯</h1>
    </header>

    <main class="add-event-wrapper">

        <form class="add-event-form">

            <div class="form-group">
                <label for="eventTitle">Titre de l'événement</label>
                <input type="text" id="eventTitle" class="form-input" placeholder="Hackathon">
            </div>

            <div class="form-group">
                <label for="eventDescription">Description</label>
                <textarea id="eventDescription" class="form-textarea" placeholder="Compétition de programmation..." ></textarea>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="eventDate">Date de l'événement</label>
                    <input type="date" id="eventDate" class="form-input">
                </div>

                <div class="form-group">
                    <label for="eventPlace">Lieu</label>
                    <input type="text" id="eventPlace" class="form-input" placeholder="Ex Yaoundé" >
                </div>

                <div class="form-group">
                    <label for="eventCategorie">Categorie</label>
                    <input type ="text" id="eventCategorie" class="form-input" placeholder="Ex Compétition">
                </div>

            </div>

            <div class="form-group">
                <label for="eventCapacity">Nombre de places</label>
                <input type="number" id="eventCapacity" class="form-input" min="1" placeholder="Ex 100">
            </div>

            <button id="submit-event-btn" type="submit" class="submit-event-btn">
                Enregistrer l'événement
            </button>

        </form>

    </main>
  `;
}



