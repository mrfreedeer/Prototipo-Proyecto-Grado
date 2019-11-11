import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { Globals } from '../../shared/global';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, Globals]
})
export class LoginComponent implements OnInit {
  containsnumber = /\d/;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern(this.containsnumber)]),
  })
  logFlag: boolean;
  constructor(private loginService: LoginService,
              private globals: Globals,
              private router: Router) { }

  ngOnInit() {
  }

  handleKeyEnter(event) {
    event.preventDefault();
  }
  
  login() {
      this.logFlag = false;
      const service = this.loginService.getToken(JSON.stringify(this.loginForm.value)).
      subscribe((res : any) => {
        let token = res.token;
        localStorage.setItem("userInfo", JSON.stringify(res.userInfo));
        localStorage.setItem("userid", res.id);
        localStorage.setItem("usertype", res.type);
        localStorage.setItem("jwt", token);
        localStorage.setItem("invalidLogin", "false");
        this.router.navigate(["/"]);
        service.unsubscribe();
        this.logFlag = true;
      }, (err: any) => {
        this.logFlag = true;
        this.mostrarError(err.statusText)
        this.globals.invalidLogin = true;
      });  
      setTimeout(() => {
        service.unsubscribe()
        if (!this.loginService.isLogged() && !this.logFlag) {
          this.mostrarError('El servidor tardó mucho en responder')
        }
      }, 5000);
  }
  mostrarError(text: string) {
    swal({
      type: 'error',
      title: 'Error...',
      text: text,
    });
  }
}
