import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../../services/authentication.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
      if (this.form.valid) {
      let username = this.form.get('userName')!.value;
      let password = this.form.get('password')!.value;

      this.authService.login(username, password)
        .subscribe({
          next: (res) => {
            this.authService.setAccessToken(res.accessToken)
            this.authService.setRefreshToken(res.refreshToken);
            // this.appService.showMessage('Sucesso!', 'fechar');
            this.authService.navigateToHome();
          },
          error: (err) => {
            console.log(err)
            alert('Usuário ou Senha invalido!')
            // this.appService.showMessage('Usuário ou Senha invalido!', 'fechar');
            return throwError(() => 'usuário ou senha inválidos');
          },
          complete: () => {
            console.log('complete')
          }
        });
    } else {
        alert('Digite seu usuário e senha!')
      // this.appService.showMessage('Digite seu usuário e senha!', 'fechar');
    }

  }
}
