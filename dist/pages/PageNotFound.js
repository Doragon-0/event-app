export function PageNotFound() {
    const div = document.createElement("div");
    div.innerHTML = `
    <header>
      <h1>Page introuvable</h1>
      <nav>
        <a href="/" data-link>Accueil</a>
      </nav>
    </header>
    <main>
      <p>Désolé, cette page n'existe pas.</p>
    </main>
  `;
    return div;
}
