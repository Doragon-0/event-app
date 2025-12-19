import { HomePage } from "../pages/HomePage.js";
import { CreateEventPage } from "../pages/CreateEventPage.js";
import { CreateUserPage } from "../pages/CreateUserPage.js";
import { RegisterPage } from "../pages/CreateRegistration.js";

export interface Route {
    path: string;
    component: () => string;
}

export const routes: Route[] = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/add-event",
        component: CreateEventPage
    },
    {
        path: "/add-user",
        component: CreateUserPage
    },
    {
        path: "/register",
        component: RegisterPage
    }
];
