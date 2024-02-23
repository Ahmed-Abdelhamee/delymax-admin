import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private messageService:MessageService
  ) {
  }
  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  //  if (await this.authService.checkAuthenticated()) {
   //   await this.router.navigate([this.returnUrl]);
   // }
  }
  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
       this.authService.emailLogin(username, password)
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}