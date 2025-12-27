export function AdminPage() {
    return `
		<div class="login-grand-container">

			<div class="login-container">
		        <h1>Admin</h1>
		        <p>Connexion à l’espace d’administration</p>

		        <form id="form-admin">
		            <div class="form-group">
		                <label for="email">Adresse e-mail</label>
		                <input type="text" id="email" placeholder="admin@exemple.com" required>
		            </div>

		            <div class="form-group">
		                <label for="password">Mot de passe</label>
		                <input type="password" id="password" placeholder="••••••••" required>
		            </div>

		            <button class="login-button" type="submit">
		                Se connecter
		            </button>
		        </form>
			</div>

		</div>

	`;
}
