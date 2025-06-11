import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class UserGuard {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const nombreUsuarioRuta = route.params['nombre_usuario'];
        const nombreUsuarioLogeado = this.authService.isLoggedIn(); // Implementa este método en tu AuthService

        if (this.authService.isLoggedIn() 
            // && nombreUsuarioRuta === nombreUsuarioLogeado
        ) {
        return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
