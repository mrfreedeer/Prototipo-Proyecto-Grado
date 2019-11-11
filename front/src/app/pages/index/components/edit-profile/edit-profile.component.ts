import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../shared/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Globals } from '../../../../shared/global';
import swal from 'sweetalert2';
import { LoginService } from './../../../../shared/services/login.service';
import { UserTypeEnum } from './../../../../shared/enums/UserType.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [UsersService, Globals, LoginService]
})
export class EditProfileComponent implements OnInit {
  containsnumber = /\d/;
  userTypeSwitch: boolean;
  changedPassword: boolean;
  submitted: boolean = false;
  editForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      lastname: new FormControl('', [Validators.minLength(2), Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern(this.containsnumber)]),
      confirmPassword: new FormControl('', []),
      businessname: new FormControl('', [Validators.minLength(2), Validators.required]),
      businessdescription: new FormControl('', [Validators.required, Validators.minLength(20)]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.min(10)]),
    }, {validators: this.checkPasswords});

  userInfo: any;

  checkPasswords(registerForm: FormGroup) { // here we have the 'passwords' group
  let password = registerForm.controls.password.value;
  let confirm = registerForm.controls.confirmPassword.value;
  
  if (confirm.length <=0) return null;
  if(confirm !== password) return {doesMatchPassword: true};
  return null;

}

  constructor(private users: UsersService,
              private globals: Globals,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.userInfo = this.loginService.getUserInfo();
    debugger
    this.initializeControls()
  }
  initializeControls() {
      this.editForm.controls.name.setValue(this.userInfo.name);
      this.editForm.controls.lastname.setValue(this.userInfo.lastname);
      this.editForm.controls.phone.setValue(this.userInfo.phone);
      this.editForm.controls.address.setValue(this.userInfo.address);
      this.editForm.controls.phone.setValue(this.userInfo.phone);
      this.editForm.controls.businessname.setValue(this.userInfo.businessname);
      this.editForm.controls.businessdescription.setValue(this.userInfo.businessdescription);
      this.editForm.controls.phone.setValue(this.userInfo.phone);
      this.editForm.controls.password.setValue("");
      
      this.editForm.controls.confirmPassword.setValue("");
     this.userTypeSwitch = (localStorage.getItem("usertype") == "1")
  }
  passwordChange() {
    this.changedPassword = true;
  }
  updateProfile(){
    this.submitted = true;
    if (!this.userTypeSwitch){
      this.editForm.controls.businessname.setValue("");
      this.editForm.controls.businessname.setErrors(null);
      this.editForm.controls.businessdescription.setValue("");
      this.editForm.controls.businessdescription.setErrors(null);
    }
    if (this.editForm.controls.password.value == ""){
      this.editForm.controls.password.setErrors(null);
    }
    console.log(this.editForm);
    if (this.editForm.valid){
      let updatedprofile = this.editForm.value;
        console.log(updatedprofile);
        if(!this.changedPassword || updatedprofile.password ==  ""){
          updatedprofile.password = "notchanged";
          updatedprofile.confirmPassword = "notchanged";
        }
        updatedprofile.id = localStorage.getItem("userid");
        const service = this.users.updateInfo(JSON.stringify(updatedprofile))
        .subscribe((res : any) => {
          if (res.success){
          localStorage.setItem("userInfo", JSON.stringify(res.userInfo));
          this.userInfo = this.loginService.getUserInfo();
          const _this = this;
            swal({
              type: 'success',
              title: 'Perfil actualizado',
              text: 'La información del perfil se actualizó exitosamente',
            }).then(function() {
              _this.router.navigate(['/']);
              window.location.reload();
          });
          service.unsubscribe();
          } else{
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'Algo salió mal! Inténtalo de nuevo más tarde',
            });
          }
        }, (err : any) =>{
          console.log(err);
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Algo salió mal! Inténtalo de nuevo más tarde',
          });
        });
      }
    
  }
  handleKeyEnter(event) {
    event.preventDefault();
  }
}
