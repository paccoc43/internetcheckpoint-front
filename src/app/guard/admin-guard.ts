import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AdminGuard {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean {
        if (this.authService.isLoggedIn() && this.authService.isAdmin() === 'ADMIN') {
        return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
