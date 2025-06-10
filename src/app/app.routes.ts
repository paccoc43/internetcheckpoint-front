import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import { MetricsPageComponent } from './pages/metrics-page/metrics-page.component';
import { AdminGuard } from './modelos/admin-guard';
import { UserGuard } from './modelos/user-guard';

export const routes: Routes = [
    { 
        path: 'home',
        component: HomePageComponent ,
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        canActivate: [AdminGuard],
        pathMatch: 'full'
    },
    { 
        path: 'login',
        component: LoginPageComponent,
        pathMatch: 'full'
    },
    { 
        path: 'perfil',
        component: ProfilePageComponent,
        canActivate: [UserGuard],
        pathMatch: 'full'
    },
        { 
        path: 'perfil/:nombre_usuario',
        component: ProfilePageComponent,
        canActivate: [UserGuard, AdminGuard]
    },
    { 
        path: 'editor-tags',
        component: TagsPageComponent,
        canActivate: [AdminGuard],
        pathMatch: 'full'
    },
    { 
        path: 'metricas',
        component: MetricsPageComponent,
        canActivate: [AdminGuard],
        pathMatch: 'full'
    },
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
