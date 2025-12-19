export function NewUserPage() {
    const div = document.createElement("div");
    div.innerHTML = `
    <header>
      <h1>Enregistrer une personne</h1>
      <nav>
        <a href="/" data-link>Accueil</a>
      </nav>
    </header>
    <main>
      <form id="personForm">
        <label>Nom
          <input type="text" name="nom" required />
        </label>
        <label>Prénom
          <input type="text" name="prenom" required />
        </label>
        <label>Email
          <input type="email" name="email" required />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
      <div id="personMessage"></div>
    </main>
  `;
    return div;
}
