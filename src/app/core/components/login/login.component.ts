import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  validationMessage = environment.validationMessage;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    const userLogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.auth.login(userLogin).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Success...',
          text: 'You are successfully Logged In',
        });
        this.router.navigate(['products/list']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Usernamme or password is incorrect',
        });
      }
    );
  }
}
