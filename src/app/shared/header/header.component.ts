import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLoggedIn$: boolean;

  constructor(private authService: AuthenticationService) {
    this.isLoggedIn$ = this.authService.isTokenPresent();
  }

  onLogout() {
    this.authService.logout();
  }
}
