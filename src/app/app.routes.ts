import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    { 
        path: 'home',
        component: HomePageComponent ,
        // children: [
        //     {
        //         path: 'lista-usuarios',
        //         title: 'lista-usuarios',
        //         component: ListaUsuariosComponent
                    
        //     },
        // ] 
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        pathMatch: 'full'
    },
    { 
        path: 'login',
        component: LoginPageComponent,
        pathMatch: 'full'
    },
    { 
        path: 'profile',
        component: ProfilePageComponent,
        pathMatch: 'full'
    },
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
