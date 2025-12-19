export function RegisterPage(): string {
  return `
    <header class="event-register-header">
      <h1>📝 Inscription à un événement</h1>
    </header>

    <main class="event-register-wrapper">

      <form class="event-register-form">

          <div class="register-form-group">
              <label for="participantAddress">Adresse du mail</label>
              <input type="text" id="participantAddress" class="register-form-input" placeholder="Entrer votre adresse mail">
          </div>

          <div class="register-form-group">
              <label for="eventId">ID de l'événement</label>
              <input type="text" id="eventId" class="register-form-input" placeholder="Ex: EVT-001">
          </div>

          <button type="submit" class="register-submit-btn">
              S'inscrire
          </button>

      </form>

    </main>

  `;
}
