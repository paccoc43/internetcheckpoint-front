import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';

export const routes: Routes = [
    { 
        path: 'home',
        component: HomePageComponent ,
        children: [
            {
                path: 'lista-usuarios',
                title: 'lista-usuarios',
                component: ListaUsuariosComponent
                    
            },
        ] 
    },
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
