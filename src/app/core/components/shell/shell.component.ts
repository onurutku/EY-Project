import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent extends BaseComponent implements OnInit {
  userLoggedIn!: User | null;
  constructor(private auth: AuthService) {
    super();
  }

  ngOnInit(): void {
    this.auth.userLoggedIn
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        this.userLoggedIn = user;
      });
  }
}
