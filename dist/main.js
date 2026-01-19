import { router, navigateTo } from "./router/router.js";
document.addEventListener("DOMContentLoaded", () => {
    router();
});
document.body.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches("[data-link]")) {
        event.preventDefault();
        navigateTo(target.getAttribute("href"));
    }
});
