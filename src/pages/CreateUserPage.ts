export function CreateUserPage(): string {

  return `
    <header class="add-user-header">
    <h1>👤 Ajouter un nouvel utilisateur</h1>
    </header>

    <main class="add-user-wrapper">

        <form class="add-user-form">

            <div class="user-form-group">
                <label for="userFirstName">Nom</label>
                <input type="text" id="userFirstName" class="user-form-input" placeholder="Assirdoua">
            </div>

            <div class="user-form-group">
                <label for="userLastName">Prenom</label>
                <input type="text" id="userLastName" class="user-form-input" placeholder="Chebychev">
            </div>

            <div class="user-form-group">
                <label for="userEmail">Adresse mail</label>
                <input type="email" id="userEmail" class="user-form-input" placeholder="example@email.com">
            </div>

            <button type="submit" class="user-submit-btn" id="user-submit-btn">
                Créer le compte
            </button>

        </form>

    </main>
  `;

}
