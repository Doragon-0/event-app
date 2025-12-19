import { routes } from "./routes.js";
import { addEventDom, addUserDom, homePageDom, addResgistration } from "../pageLogic/DOMExecution.js";
const app = document.getElementById("app");
export function router() {
    const path = window.location.pathname;
    const route = routes.find(r => r.path === path);
    if (!route) {
        app.innerHTML = "<h2>404 - Page not found</h2>";
        return;
    }
    app.innerHTML = route.component();
    eventPerPage(path);
}
export function navigateTo(path) {
    history.pushState({}, "", path);
    router();
}
window.addEventListener("popstate", router);
function eventPerPage(path) {
    if (path === "/add-event") {
        addEventDom();
    }
    if (path === "/add-user") {
        addUserDom();
    }
    if (path === "/") {
        homePageDom();
    }
    if (path == "/register") {
        addResgistration();
    }
}
