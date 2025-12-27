export function HomePage() {
    return `
  
    <header class="main-header">
        <h1>🎉 Bienvenue dans la gestion des évènements 📅</h1>
    </header>
    
    <div class="search-wrapper">
        <div  class="search-container">
          <input type="text" placeholder="Rechercher..." id="search-container">
          <button>🔍</button>
        </div>
    </div>

    <main class="container" id="events-container">

    </main>
    
  `;
}
