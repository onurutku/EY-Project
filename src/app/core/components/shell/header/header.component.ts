import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from 'src/app/shared/models/role.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  role = Role;
  userLoggedIn!: User | null;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userLoggedIn = this.auth.userLoggedIn.value;
  }
  logout() {
    this.auth.logout();
  }
}
