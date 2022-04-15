import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
    constructor(public jwtHelper: JwtHelperService) { }
    // ...
    public isAuthenticated(): boolean {
        var token = localStorage.getItem('token')?.toString()
        return !this.jwtHelper.isTokenExpired(token);
    }
}