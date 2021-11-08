import Home from './pages/home/Home.vue';
import Register from './pages/register/Register.vue';
import Edit from './pages/edit/Edit.vue';



export const routes = [
    {path: '', component: Home, titulo: Home},
    {path: '/register', component: Register, titulo: Register},
    {path: '/edit/:id', component: Edit, titulo: Edit},
];